'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const bgJokerUrl = '/bg-joker.jpg';
  const paramImgUrl = '/param.png';

  const menus = [
    { id: 1, name: 'วิเคราะห์บอล', icon: '⚽' },
    { id: 2, name: 'สูตรสล็อต', icon: '🎰' },
    { id: 3, name: 'ผลบอลสด', icon: '📊' },
    { id: 4, name: 'กงล้อ', icon: '🎡' },
    { id: 5, name: 'เครดิตฟรี', icon: '🎁' },
    { id: 6, name: 'กล่องสุ่ม', icon: '📦' },
    { id: 7, name: 'Ranking', icon: '🏆' },
    { id: 8, name: 'ชวนเพื่อน', icon: '👥' },
    { id: 9, name: 'ร้านค้า', icon: '🛍️' }
  ];

  const footballMatches = [
    {
      id: 1,
      league: 'พรีเมียร์ลีก',
      teamA: 'แมนฯ ซิตี้',
      teamB: 'ลิเวอร์พูล',
      time: "LIVE 75'",
      score: '2 - 1',
      tip: 'สูง 3.0',
      status: 'live'
    },
    {
      id: 2,
      league: 'ลาลีกา',
      teamA: 'เรอัล มาดริด',
      teamB: 'บาร์เซโลน่า',
      time: '02:00 น.',
      score: 'vs',
      tip: 'เรอัล มาดริด -0.5',
      status: 'upcoming'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('ALL');

  const [slotGames, setSlotGames] = useState([
    { id: 1, name: 'Mahjong Ways 2', provider: 'PG Soft', rtp: 96.8, winRate: 89, volatility: 'HIGH', status: 'HOT' },
    { id: 2, name: 'Treasures of Aztec', provider: 'PG Soft', rtp: 98.2, winRate: 95, volatility: 'HIGH', status: 'VERY HOT' },
    { id: 3, name: 'Lucky Neko', provider: 'PG Soft', rtp: 97.4, winRate: 91, volatility: 'HIGH', status: 'HOT' },
    { id: 4, name: 'Wild Bandito', provider: 'PG Soft', rtp: 96.7, winRate: 88, volatility: 'HIGH', status: 'HOT' },
    { id: 5, name: 'Caishen Wins', provider: 'PG Soft', rtp: 96.9, winRate: 90, volatility: 'HIGH', status: 'HOT' },
    { id: 6, name: 'Ways of the Qilin', provider: 'PG Soft', rtp: 96.6, winRate: 86, volatility: 'NORMAL' },
    { id: 7, name: 'Fortune Ox', provider: 'PG Soft', rtp: 97.8, winRate: 93, volatility: 'MEDIUM', status: 'VERY HOT' },
    { id: 8, name: 'Ganesha Fortune', provider: 'PG Soft', rtp: 96.7, winRate: 87, volatility: 'HIGH', status: 'NORMAL' },
    { id: 9, name: 'Dragon Hatch 2', provider: 'PG Soft', rtp: 96.5, winRate: 85, volatility: 'MEDIUM', status: 'NORMAL' },
    { id: 10, name: "Captain's Bounty", provider: 'PG Soft', rtp: 97.1, winRate: 89, volatility: 'HIGH', status: 'HOT' },

    { id: 11, name: 'Wanted Dead or a Wild', provider: 'Hacksaw', rtp: 98.6, winRate: 96, volatility: 'EXTREME', status: 'VERY HOT' },
    { id: 12, name: 'Le Bandit', provider: 'Hacksaw', rtp: 97.2, winRate: 92, volatility: 'HIGH', status: 'HOT' },
    { id: 13, name: 'RIP City', provider: 'Hacksaw', rtp: 96.4, winRate: 87, volatility: 'HIGH', status: 'NORMAL' },
    { id: 14, name: 'Chaos Crew 2', provider: 'Hacksaw', rtp: 98.1, winRate: 94, volatility: 'EXTREME', status: 'VERY HOT' },
    { id: 15, name: 'Dork Unit', provider: 'Hacksaw', rtp: 96.3, winRate: 85, volatility: 'MEDIUM', status: 'NORMAL' },
    { id: 16, name: 'Hand of Anubis', provider: 'Hacksaw', rtp: 97.5, winRate: 91, volatility: 'EXTREME', status: 'HOT' },
    { id: 17, name: 'Beam Boys', provider: 'Hacksaw', rtp: 96.8, winRate: 88, volatility: 'EXTREME', status: 'HOT' },

    { id: 18, name: 'San Quentin xWays', provider: 'NoLimit', rtp: 99.1, winRate: 98, volatility: 'EXTREME', status: 'VERY HOT' },
    { id: 19, name: 'Mental', provider: 'NoLimit', rtp: 98.4, winRate: 94, volatility: 'EXTREME', status: 'VERY HOT' },
    { id: 20, name: 'Fire in the Hole xBomb', provider: 'NoLimit', rtp: 96.9, winRate: 88, volatility: 'EXTREME', status: 'HOT' },
    { id: 21, name: 'Tombstone RIP', provider: 'NoLimit', rtp: 98.8, winRate: 97, volatility: 'EXTREME', status: 'VERY HOT' },
    { id: 22, name: 'Nine To Five', provider: 'NoLimit', rtp: 96.5, winRate: 86, volatility: 'HIGH', status: 'NORMAL' },
    { id: 23, name: 'Deadwood xNudge', provider: 'NoLimit', rtp: 97.0, winRate: 89, volatility: 'EXTREME', status: 'HOT' },
    { id: 24, name: 'Das xBoot', provider: 'NoLimit', rtp: 96.7, winRate: 87, volatility: 'EXTREME', status: 'NORMAL' },

    { id: 25, name: 'Sweet Bonanza', provider: 'Pragmatic', rtp: 97.5, winRate: 93, volatility: 'HIGH', status: 'HOT' },
    { id: 26, name: 'Gates of Olympus 1000', provider: 'Pragmatic', rtp: 98.0, winRate: 95, volatility: 'EXTREME', status: 'VERY HOT' },
    { id: 27, name: 'Starlight Princess 1000', provider: 'Pragmatic', rtp: 97.9, winRate: 94, volatility: 'HIGH', status: 'VERY HOT' },
    { id: 28, name: 'Sugar Rush 1000', provider: 'Pragmatic', rtp: 97.1, winRate: 90, volatility: 'HIGH', status: 'HOT' },
    { id: 29, name: 'Big Bass Splash', provider: 'Pragmatic', rtp: 96.7, winRate: 87, volatility: 'MEDIUM', status: 'NORMAL' },
    { id: 30, name: 'Dog House Megaways', provider: 'Pragmatic', rtp: 96.5, winRate: 86, volatility: 'HIGH', status: 'NORMAL' },

    { id: 31, name: 'Roma X', provider: 'JILI', rtp: 97.6, winRate: 92, volatility: 'MEDIUM', status: 'HOT' },
    { id: 32, name: 'Golden Empire', provider: 'JILI', rtp: 98.3, winRate: 96, volatility: 'HIGH', status: 'VERY HOT' },
    { id: 33, name: 'Boxing King', provider: 'JILI', rtp: 96.9, winRate: 88, volatility: 'MEDIUM', status: 'HOT' },
    { id: 34, name: 'Mega Ace', provider: 'JILI', rtp: 97.2, winRate: 90, volatility: 'HIGH', status: 'HOT' },
    { id: 35, name: 'Super Rich', provider: 'JILI', rtp: 96.4, winRate: 84, volatility: 'LOW', status: 'NORMAL' },

    { id: 36, name: 'Roma', provider: 'Joker', rtp: 98.5, winRate: 97, volatility: 'HIGH', status: 'VERY HOT' },
    { id: 37, name: 'Supreme Caishen', provider: 'Joker', rtp: 97.0, winRate: 89, volatility: 'MEDIUM', status: 'HOT' },
    { id: 38, name: 'Sizzling Hot', provider: 'Joker', rtp: 96.2, winRate: 83, volatility: 'LOW', status: 'NORMAL' },
    { id: 39, name: 'Black Beard Legacy', provider: 'Joker', rtp: 96.8, winRate: 87, volatility: 'HIGH', status: 'NORMAL' },
    { id: 40, name: 'Lucky God Progressive', provider: 'Joker', rtp: 97.4, winRate: 91, volatility: 'HIGH', status: 'HOT' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlotGames((prevGames) =>
        prevGames.map((game) => {
          const rtpDelta = Math.random() * 1.0 - 0.5;
          const newRtp = Math.min(Math.max(game.rtp + rtpDelta, 92.0), 99.9);

          const winRateDelta = Math.floor(Math.random() * 7) - 3;
          const newWinRate = Math.min(Math.max(game.winRate + winRateDelta, 72), 99);

          let newStatus = 'NORMAL';
          if (newWinRate >= 94) newStatus = 'VERY HOT';
          else if (newWinRate >= 88) newStatus = 'HOT';

          return {
            ...game,
            rtp: parseFloat(newRtp.toFixed(1)),
            winRate: newWinRate,
            status: newStatus
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const filteredAndSortedGames = slotGames
    .filter(
      (g) =>
        activeCategory === 'ALL' ||
        g.provider.toLowerCase().includes(activeCategory.toLowerCase())
    )
    .sort((a, b) => b.winRate - a.winRate);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // 🟢 BC.GAME Theme Background
        backgroundColor: '#0f1722',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(29, 206, 99, 0.15) 0%, transparent 65%),
          radial-gradient(circle at 100% 30%, rgba(0, 231, 1, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, #101923 0%, #0a0f17 100%),
          url("${bgJokerUrl}")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        fontFamily: "'Inter', 'Kanit', sans-serif, system-ui",
        overflowX: 'hidden',
        color: '#ffffff'
      }}
    >
      <style>{`
        @keyframes mq { 
          0% { transform: translateX(100%); } 
          100% { transform: translateX(-100%); } 
        }
        .mq-in { 
          display: inline-block; 
          white-space: nowrap; 
          padding-left: 100%; 
          animation: mq 16s linear infinite; 
        }

        /* 🚀 BC.GAME Neon Green Primary Button Styling */
        .bc-btn-primary {
          background: #1dce63 !important;
          color: #07130c !important;
          font-weight: 800 !important;
          border: none !important;
          box-shadow: 0 4px 20px rgba(29, 206, 99, 0.4) !important;
          transition: all 0.2s ease-in-out !important;
        }
        .bc-btn-primary:hover {
          background: #20e26d !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 25px rgba(29, 206, 99, 0.6) !important;
        }

        /* 🖤 BC.GAME Secondary Dark Button Styling */
        .bc-btn-secondary {
          background: #212d3b !important;
          color: #98a7b5 !important;
          font-weight: 700 !important;
          border: 1px solid #2d3b4e !important;
          transition: all 0.2s ease-in-out !important;
        }
        .bc-btn-secondary:hover {
          background: #2b394a !important;
          color: #ffffff !important;
        }

        /* 📦 BC.GAME Card Container Style */
        .bc-card {
          background: #17212d !important;
          border: 1px solid #243242 !important;
          border-radius: 12px !important;
          transition: all 0.25s ease !important;
        }
        .bc-card:hover {
          border-color: #1dce63 !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.4), 0 0 15px rgba(29, 206, 99, 0.2) !important;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div style={{ width: '100%', maxWidth: '480px', paddingBottom: '140px', position: 'relative' }}>
        
        {/* HEADER - BC.GAME Style Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 14px',
            background: '#17212d',
            borderBottom: '1px solid #243242',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            position: 'sticky',
            top: 0,
            zIndex: 90
          }}
        >
          {/* BC.GAME Inspired Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #1dce63 0%, #00e701 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                color: '#07130c',
                fontSize: '1rem',
                boxShadow: '0 0 12px rgba(29,206,99,0.5)'
              }}
            >
              B
            </div>
            <span
              style={{
                fontWeight: 900,
                fontSize: '1.45rem',
                letterSpacing: '0.5px',
                color: '#ffffff'
              }}
            >
              BOOMBER<span style={{ color: '#1dce63' }}>BET</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <a
              href="https://www.boomberbet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bc-btn-secondary"
              style={{
                textDecoration: 'none',
                fontSize: '0.8rem',
                padding: '8px 14px',
                borderRadius: '8px'
              }}
            >
              เข้าสู่ระบบ
            </a>
            <a
              href="https://lin.ee/u8r4wPq"
              target="_blank"
              rel="noopener noreferrer"
              className="bc-btn-primary"
              style={{
                textDecoration: 'none',
                fontSize: '0.82rem',
                padding: '8px 16px',
                borderRadius: '8px'
              }}
            >
              สมัครสมาชิก
            </a>
          </div>
        </div>

        {/* ANNOUNCEMENT BAR */}
        <div
          style={{
            background: '#0d141e',
            padding: '8px 12px',
            fontSize: '0.78rem',
            color: '#98a7b5',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid #1a2634'
          }}
        >
          <span
            style={{
              color: '#1dce63',
              fontWeight: '800',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            🔊 ประกาศ:
          </span>
          <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
            <div className="mq-in">
              ตารางสแกนสล็อต AI เรียงอันดับ 40 เกมแตกดีที่สุด Real-time Auto-Sort อัปเดตสดทุก 2 วินาที
            </div>
          </div>
        </div>

        {/* BANNER BANNER / HERO SECTION */}
        <div style={{ padding: '14px 12px' }}>
          <div
            style={{
              width: '100%',
              minHeight: '160px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #172535 0%, #101a26 100%)',
              border: '1px solid #28394e',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              position: 'relative',
              overflow: 'hidden',
              padding: '20px 18px'
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: '-10px',
                bottom: '-15px',
                width: '150px',
                height: '150px',
                backgroundImage: `url("${paramImgUrl}")`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                opacity: 0.25,
                pointerEvents: 'none'
              }}
            ></div>

            <span
              style={{
                background: 'rgba(29, 206, 99, 0.15)',
                color: '#1dce63',
                border: '1px solid rgba(29, 206, 99, 0.4)',
                fontSize: '0.68rem',
                padding: '4px 10px',
                borderRadius: '6px',
                fontWeight: '800',
                marginBottom: '8px'
              }}
            >
              ● LIVE SCANNER
            </span>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '6px'
              }}
            >
              ตารางสแกนสล็อต <span style={{ color: '#1dce63' }}>AI</span>
            </div>
            <div
              style={{
                fontSize: '0.82rem',
                color: '#98a7b5',
                fontWeight: 500,
                maxWidth: '75%'
              }}
            >
              สแกนอัตราการแตกของเกมสล็อตเรียลไทม์ แม่นยำที่สุด
            </div>
          </div>
        </div>

        {/* GRID 9 ITEMS */}
        <div style={{ padding: '0 12px 16px 12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {menus.map((m) => (
              <a
                href="https://www.boomberbet.com"
                target="_blank"
                rel="noopener noreferrer"
                key={m.id}
                className="bc-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '84px',
                  textDecoration: 'none'
                }}
              >
                <span style={{ fontSize: '1.8rem', marginBottom: '4px', display: 'block' }}>
                  {m.icon}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#c1d1e0', fontWeight: 700 }}>
                  {m.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 🎰 PRO SCANNER SECTION WITH AUTO-SORT */}
        <div style={{ padding: '0 12px 16px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span
              style={{
                fontSize: '1rem',
                fontWeight: '800',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1dce63', boxShadow: '0 0 8px #1dce63' }}></span>
              อันดับเกมแตกดี (Auto-Sort)
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                background: '#101923',
                color: '#98a7b5',
                border: '1px solid #243242',
                padding: '3px 8px',
                borderRadius: '6px',
                fontWeight: '700'
              }}
            >
              40 GAMES
            </span>
          </div>

          {/* FILTER BUTTONS - BC.GAME Style Pills */}
          <div
            className="no-scrollbar"
            style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '10px' }}
          >
            {['ALL', 'PG Soft', 'Hacksaw', 'NoLimit', 'Pragmatic', 'JILI', 'Joker'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#1dce63' : '#17212d',
                  color: activeCategory === cat ? '#07130c' : '#98a7b5',
                  border: activeCategory === cat ? 'none' : '1px solid #243242',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {cat === 'ALL' ? '🔥 ทั้งหมด' : cat}
              </button>
            ))}
          </div>

          {/* GAME CARDS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            {filteredAndSortedGames.map((game, index) => {
              const rankBadge = index === 0 ? '🥇 #1' : index === 1 ? '🥈 #2' : index === 2 ? '🥉 #3' : `#${index + 1}`;
              const isTop3 = index < 3;

              return (
                <div
                  key={game.id}
                  className="bc-card"
                  style={{
                    padding: '10px',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span
                      style={{
                        background: isTop3 ? 'rgba(29,206,99,0.2)' : '#101923',
                        color: isTop3 ? '#1dce63' : '#98a7b5',
                        border: isTop3 ? '1px solid rgba(29,206,99,0.4)' : '1px solid #243242',
                        fontSize: '0.62rem',
                        fontWeight: '800',
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}
                    >
                      {rankBadge}
                    </span>

                    <span
                      style={{
                        background:
                          game.status === 'VERY HOT'
                            ? 'rgba(255,77,77,0.2)'
                            : game.status === 'HOT'
                            ? 'rgba(255,170,0,0.2)'
                            : '#101923',
                        color:
                          game.status === 'VERY HOT'
                            ? '#ff4d4d'
                            : game.status === 'HOT'
                            ? '#ffaa00'
                            : '#6c7a89',
                        fontSize: '0.58rem',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                      }}
                    >
                      {game.status}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.65rem', color: '#6c7a89', fontWeight: '700', marginTop: '2px' }}>
                    {game.provider}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '8px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {game.name}
                  </div>

                  {/* RTP Box */}
                  <div
                    style={{
                      background: '#0d141e',
                      padding: '5px 8px',
                      borderRadius: '6px',
                      marginBottom: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid #1a2634'
                    }}
                  >
                    <span style={{ fontSize: '0.68rem', color: '#8899a8' }}>RTP</span>
                    <span style={{ fontSize: '0.82rem', color: '#1dce63', fontWeight: 800 }}>
                      {game.rtp}%
                    </span>
                  </div>

                  <div style={{ fontSize: '0.68rem', display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#8899a8' }}>อัตราชนะ:</span>
                    <span style={{ color: game.winRate >= 90 ? '#1dce63' : '#3b82f6', fontWeight: '800' }}>
                      {game.winRate}%
                    </span>
                  </div>

                  <div
                    style={{
                      width: '100%',
                      backgroundColor: '#0d141e',
                      borderRadius: '4px',
                      height: '6px',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        width: `${game.winRate}%`,
                        background: game.winRate >= 90 ? '#1dce63' : '#3b82f6',
                        height: '100%',
                        transition: 'width 0.5s ease-in-out'
                      }}
                    ></div>
                  </div>

                  <a
                    href="https://www.boomberbet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={index === 0 ? 'bc-btn-primary' : 'bc-btn-secondary'}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      marginTop: '10px',
                      fontSize: '0.72rem',
                      padding: '6px 0',
                      borderRadius: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    เล่นเกมนี้
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTBALL ANALYSIS */}
        <div style={{ padding: '0 12px 16px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span
              style={{
                fontSize: '1rem',
                fontWeight: '800',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              ⚽ วิเคราะห์ฟุตบอล
            </span>
            <a href="https://www.boomberbet.com" style={{ fontSize: '0.75rem', color: '#1dce63', textDecoration: 'none', fontWeight: 'bold' }}>
              ดูทั้งหมด &gt;
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {footballMatches.map((match) => (
              <div key={match.id} className="bc-card" style={{ padding: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#8899a8', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 'bold', color: '#c1d1e0' }}>{match.league}</span>
                  <span style={{ color: match.status === 'live' ? '#ff4d4d' : '#1dce63', fontWeight: 'bold' }}>
                    {match.time}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  <span style={{ width: '40%', textAlign: 'right', color: '#fff' }}>{match.teamA}</span>
                  <span
                    style={{
                      padding: '3px 10px',
                      background: '#0d141e',
                      border: '1px solid #243242',
                      borderRadius: '6px',
                      color: '#1dce63',
                      fontSize: '0.85rem'
                    }}
                  >
                    {match.score}
                  </span>
                  <span style={{ width: '40%', textAlign: 'left', color: '#fff' }}>{match.teamB}</span>
                </div>
                <div
                  style={{
                    marginTop: '8px',
                    paddingTop: '8px',
                    borderTop: '1px solid #243242',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.78rem'
                  }}
                >
                  <span style={{ color: '#8899a8' }}>
                    ทีเด็ด: <strong style={{ color: '#1dce63' }}>{match.tip}</strong>
                  </span>
                  <a
                    href="https://www.boomberbet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}
                  >
                    แทงบอล &gt;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
