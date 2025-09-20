import React, { useState } from 'react';

const Home = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    {
      id: 1,
      title: "The Variable Village",
      description: "Learn about variables and data types",
      difficulty: "Beginner",
      locked: false
    },
    {
      id: 2,
      title: "Conditional Castle",
      description: "Master if-else statements",
      difficulty: "Beginner",
      locked: false
    },
    {
      id: 3,
      title: "Loop Laboratory",
      description: "Explore for and while loops",
      difficulty: "Intermediate",
      locked: true
    },
    {
      id: 4,
      title: "Function Forest",
      description: "Create and use functions",
      difficulty: "Intermediate",
      locked: true
    },
    {
      id: 5,
      title: "Array Adventure",
      description: "Work with arrays and objects",
      difficulty: "Advanced",
      locked: true
    }
  ];

  const handleLevelClick = (level) => {
    if (!level.locked) {
      setSelectedLevel(level);
      // Here you would navigate to the actual game level
      console.log(`Starting level: ${level.title}`);
    }
  };

  return (
    <div className="game-home-container">
      {/* Background Image */}
      <div 
        className="background-image"
        style={{
          backgroundImage: `url('/home.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="overlay" />
      
      {/* Content */}
      <div className="content-wrapper">
        {/* Left side - Game Title and Info */}
        <div className="left-section">
          <h1 className="game-title">LOKHA</h1>
          <p className="game-subtitle"> Shadows of Bengaluru</p>
          <div className="game-description">
            <p>Step into the shadows of Bengaluru's underworld where Chandra, the legendary protector, guides you through the mystical realm of coding. Master dark programming arts and become the guardian of digital balance in this supernatural coding adventure.</p>
          </div>
        </div>

        {/* Right side - Level Selection */}
        <div className="right-section">
          <h2 className="levels-title">Choose Your Adventure</h2>
          <div className="levels-container">
            {levels.map((level) => (
              <div
                key={level.id}
                className={`level-card ${level.locked ? 'locked' : 'unlocked'} ${
                  selectedLevel?.id === level.id ? 'selected' : ''
                }`}
                onClick={() => handleLevelClick(level)}
              >
                <div className="level-number">{level.id}</div>
                <div className="level-info">
                  <h3 className="level-title">{level.title}</h3>
                  <p className="level-description">{level.description}</p>
                  <span className={`difficulty-badge ${level.difficulty.toLowerCase()}`}>
                    {level.difficulty}
                  </span>
                </div>
                {level.locked && (
                  <div className="lock-icon">🔒</div>
                )}
              </div>
            ))}
          </div>
          
          {selectedLevel && (
            <button className="start-button">
              Start {selectedLevel.title}
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .game-home-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          font-family: 'Arial', sans-serif;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg, 
            rgba(0, 0, 0, 0.4) 0%, 
            rgba(139, 0, 0, 0.2) 30%, 
            rgba(0, 0, 0, 0.1) 50%,
            rgba(139, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: 2;
        }

        .overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 20% 30%, 
            rgba(255, 0, 0, 0.1) 0%, 
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 70%, 
            rgba(255, 0, 0, 0.08) 0%, 
            transparent 50%
          );
          animation: pulseGlow 4s ease-in-out infinite alternate;
        }

        @keyframes pulseGlow {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }

        .content-wrapper {
          position: relative;
          z-index: 3;
          display: flex;
          width: 100%;
          height: 100%;
          color: white;
        }

        .left-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 60px;
          max-width: 50%;
          position: relative;
        }

        .left-section::before {
          content: '';
          position: absolute;
          top: 20%;
          left: -10%;
          width: 120%;
          height: 60%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 0, 0, 0.1) 0%,
            transparent 70%
          );
          animation: pulseGlow 4s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .game-title {
          font-size: 4rem;
          font-weight: bold;
          margin: 0;
          background: linear-gradient(45deg, #ff0000, #ffffff, #ff6666, #ff0000);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease-in-out infinite;
          text-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
          position: relative;
        }

        .game-title::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(45deg, #ff0000, #cc0000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -1;
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes textGlow {
          0% { filter: blur(5px); opacity: 0.8; }
          100% { filter: blur(8px); opacity: 0.4; }
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .game-subtitle {
          font-size: 1.6rem;
          color: #ff6666;
          margin: 15px 0 40px 0;
          text-shadow: 0 2px 10px rgba(255, 102, 102, 0.3);
          animation: floatUp 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .game-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #e6e6e6;
          max-width: 500px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          animation: floatUp 2.5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .right-section {
          width: 450px;
          padding: 40px;
          background: rgba(0, 0, 0, 0.6);
          border-left: 3px solid #ff0000;
          backdrop-filter: blur(10px);
          border-radius: 0 0 0 20px;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
          animation: slideIn 1s ease-out;
        }

        .right-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 0, 0, 0.05) 0%,
            transparent 100%
          );
          border-radius: 0 0 0 20px;
          pointer-events: none;
        }

        .levels-title {
          color: #ff0000;
          font-size: 2rem;
          margin-bottom: 30px;
          text-align: center;
        }

        .levels-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .level-card {
          display: flex;
          align-items: center;
          background: rgba(20, 20, 20, 0.7);
          border: 2px solid #333;
          border-radius: 15px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          backdrop-filter: blur(5px);
          animation: floatUp 3s ease-in-out infinite;
        }

        .level-card:nth-child(even) {
          animation-delay: 1.5s;
        }

        .level-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 15px;
          padding: 2px;
          background: linear-gradient(45deg, transparent, #ff0000, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .level-card.unlocked:hover::before {
          opacity: 1;
        }

        .level-card.unlocked:hover {
          border-color: #ff0000;
          background: rgba(139, 0, 0, 0.3);
          transform: translateX(8px) scale(1.02);
          box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
        }

        .level-card.selected {
          border-color: #ff0000;
          background: rgba(139, 0, 0, 0.3);
        }

        .level-card.locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .level-number {
          background: linear-gradient(135deg, #ff0000, #cc0000);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.3rem;
          margin-right: 20px;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
          position: relative;
        }

        .level-number::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(45deg, #ff0000, #ffffff, #ff0000);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .level-card.locked .level-number {
          background: #666;
        }

        .level-info {
          flex: 1;
        }

        .level-title {
          color: white;
          font-size: 1.3rem;
          margin: 0 0 8px 0;
        }

        .level-description {
          color: #ccc;
          font-size: 0.9rem;
          margin: 0 0 10px 0;
        }

        .difficulty-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .difficulty-badge.beginner {
          background: #00aa00;
          color: white;
        }

        .difficulty-badge.intermediate {
          background: #ff8800;
          color: white;
        }

        .difficulty-badge.advanced {
          background: #ff0000;
          color: white;
        }

        .lock-icon {
          position: absolute;
          right: 15px;
          top: 15px;
          font-size: 1.2rem;
        }

        .start-button {
          width: 100%;
          background: linear-gradient(135deg, #ff0000, #cc0000, #ff0000);
          background-size: 200% 200%;
          color: white;
          border: none;
          padding: 18px 30px;
          border-radius: 12px;
          font-size: 1.3rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .start-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
        }

        .start-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .start-button:hover {
          background: linear-gradient(135deg, #cc0000, #990000, #cc0000);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
        }

        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
          }
          
          .left-section {
            max-width: 100%;
            padding: 40px 20px 20px 20px;
          }
          
          .right-section {
            width: 100%;
            padding: 20px;
          }
          
          .game-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;