import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

function Card(props) {
  const customBoxStyle = {
    backgroundColor: props.mode === 'default' ? '#1F75FE' : props.mode === 'dark' ? 'black' : '#fff',
    borderRadius: '50px',
    border: '5px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    width: '80vw',
    margin: '60px auto 20px auto',
    minWidth: '350px',
    overflow: 'hidden',
  };

  const videoStyle = {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
  };

  const rightSideStyle = {
    color: props.mode === 'default' ? 'white' : props.mode === 'dark' ? 'white' : 'black',
    padding: '5%',
  };

  const headingStyle = {
    color: props.mode === 'default' ? 'white' : props.mode === 'dark' ? 'white' : 'black',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '10px',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  };

  const lastImageContainerStyle = {
    backgroundColor: props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'rgba(var(--bs-light-rgb), var(--bs-bg-opacity))' : 'rgba(var(--bs-primary-rgb), var(--bs-bg-opacity))',
    padding: '20px',
  };

  const slideIn = useSpring({
    from: { transform: 'translateX(-100%)' },  
    to: { transform: 'translateX(0)' },      
    config: { duration: 2000 }                
  });

  // const slideInRight = useSpring({
  //   from: { transform: 'translateX(100%)' },  
  //   to: { transform: 'translateX(0)' },       
  //   config: { duration: 2000 }               
  // });
  

  return (
    <>
      <div className={`container-fluid bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'}`}
        style={{ background: customBoxStyle.backgroundColor, padding: '8px 4px', color: props.mode === 'light' ? 'black' : 'white' }}>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="d-flex items-center justify-center">
            {/* Wrap the outermost div in animated.div and apply the spring style */}
            <animated.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={{ ...customBoxStyle, ...slideIn }} // Apply slideIn animation here
            >
              <div className="left-side col-md-6 p-4 d-flex items-center justify-center">
                <video
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/663b271d6f05c8c9e11f8d65_Discord%20Refresh%20Sound-MP4-transcode.mp4"
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
              <div className="right-side col-md-6 d-flex ml-3 items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Make your group chats more fun</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                    Use custom emoji, stickers, soundboard effects, and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.
                  </p>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
    
        <div className={`container-fluid bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'} style={{ background: customBoxStyle.backgroundColor, padding: '8px 4px' }}`}
      style={{ color: props.mode === 'light' ? 'black' : 'white' }}>       
          <div className="d-flex justify-content-center align-items-center w-100">
            <motion.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={customBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Stream like you’re in the same room</h2>
                  <p className="lead pt-4 font-semibold" style={paragraphStyle}>
                    High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.
                  </p>
                </div>
              </div>
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F665434315cbc60da2d4c9684_Discord_Website_Refresh_Same%20Room_EN_V2-transcode.mp4"
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className={`container-fluid bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'} style={{ background: customBoxStyle.backgroundColor, padding: '8px 4px' }}`}
      style={{ color: props.mode === 'light' ? 'black' : 'white' }}>         
          <div className="d-flex justify-content-center align-items-center w-100">
          <animated.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={{ ...customBoxStyle, ...slideIn }} // Apply slideIn animation here
            >
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c6b04eff56a99c1e2d7d_Discord_Website_Refresh_Hop-In-transcode.mp4"
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle} className='max-sm:text-center'>Hop in when you're free, no need to call</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                    Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.
                  </p>
                </div>
              </div>
            </animated.div>
          </div>
        </div>

        <div className={`container-fluid bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'} style={{ background: customBoxStyle.backgroundColor, padding: '8px 4px' }}`}
      style={{ color: props.mode === 'light' ? 'black' : 'white' }}>          
          <div className="d-flex justify-content-center align-items-center w-100">
            <motion.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={customBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>See who's around to chill</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                    See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.
                  </p>
                </div>
              </div>
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See%20Who_s%20Around-transcode.mp4"
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className={`container-fluid bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'} style={{ background: customBoxStyle.backgroundColor, padding: '8px 4px' }}`}
      style={{ color: props.mode === 'light' ? 'black' : 'white' }}>  
        {/* <div className={`container-fluid bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'} slide-in`} 
      style={{ background: customBoxStyle.backgroundColor, padding: '8px 4px', color: props.mode === 'light' ? 'black' : 'white' }}> */}
          <div className="d-flex justify-content-center align-items-center w-100">
          <animated.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={{ ...customBoxStyle, ...slideIn }} // Apply slideIn animation here
            >
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66446078b3e738a7c1f85e35_Discord_Website_Refresh_Activities_03-transcode.mp4"
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Hop in when you're free, no need to call</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                    Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.
                  </p>
                </div>
              </div>
            </animated.div>
          </div>
        </div>

        <div className={`container-fluid bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'} style={{ background: customBoxStyle.backgroundColor, padding: '8px 4px' }}`}
      style={{ color: props.mode === 'light' ? 'black' : 'white' }}>          
          <div className="d-flex justify-content-center align-items-center w-100">
            <motion.div
              className="custom-box d-flex flex-column flex-md-row p-2 overflow-hidden rounded-xl "
              style={customBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Hop in when you're free, no need to call</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                    Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.
                  </p>
                </div>
              </div>
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c8e7cb756886cd8d61af_Discord_Website_Refresh_Platforms-transcode.mp4"
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className={`text-center mt-5 bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'}`}>
          {/* Adding <style> tag for keyframes within the component */}
          <style>
            {`
              @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
              }
            `}
          </style>

          <h1 className={`text-${props.mode === 'light' ? 'black' : 'white' } pb-5 pt-5 fw-bold`} style={{
           animation: 'blink 1s infinite', // Referencing the defined keyframe
           }}>
           YOU CAN'T SCROLL ANYMORE. <br />BETTER GO CHAT.
          </h1>
          <div className="mt-3" style={lastImageContainerStyle}>
            <img
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut-p-2000.webp"
              alt="Footer Art"
              style={{ maxWidth: '100%', height: 'auto' }}/>
          </div>
        </div>
    </div>
    </>
  );
}

export default Card;