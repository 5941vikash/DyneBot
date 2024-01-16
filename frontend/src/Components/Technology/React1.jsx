import { Box, Button, Card, Container, Grid } from "@mui/material";
import React from "react";
import img3 from '../../Assets/agile.svg';
import img2 from '../../Assets/business-centric.svg';
import img1 from '../../Assets/dotnet-devimg.svg';
import new4 from '../../Assets/ecommerce.svg';
import new2 from '../../Assets/education.svg';
import new1 from '../../Assets/fintech.svg';
import img5 from '../../Assets/guarantee.svg';
import new6 from '../../Assets/healthcare.svg';
import new5 from '../../Assets/hospitality-management.svg';
import new9 from '../../Assets/logistics-distribution.svg';
import img7 from '../../Assets/maintenance.svg';
import new7 from '../../Assets/media-entertainment.svg';
import img4 from '../../Assets/ontime.svg';
import new8 from '../../Assets/public-sector.svg';
import react from '../../Assets/react.svg';
import img6 from '../../Assets/scalable.svg';
import new3 from '../../Assets/travel.svg';

const React1 = () => {
  return (
    <div style={{ margin: "0", padding: "0", cursor: "default" }}>

 {/*-------------------1st part----------------------*/}
      
      <section style={{ padding: "100px 5% 30px",display:'block' }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            animation:'f-out .5s ease-in-out forwards'
          }}
        >
          <Grid item sm={10} lg={7} xl={6}>
            <h1
              style={{
                fontWeight: "500px",
                fontSize: "clamp(2rem,5vw,3.7rem)",
                marginBottom: "3rem",
              }}
            >
              <span style={{ fontWeight: "unset", color: "#33c6e5" }}>
               React
              </span>
              &nbsp;
              Development
              <br />
              Company
            </h1>
            <p
              style={{
                background: "unset",
                fontSize: "0.85rem",
                marginBottom: "20px",
                color: "#686868",
              }}
            >
        With a group of industry trained professionals, we are among the best. Net programming advancement firms and make high-performing.NET applications for our worldwide clients. Our purposeful and dependable improvement methodology assists organizations with presenting dynamic programming arrangements all the more rapidly.
            </p>
            <Box sx={{ display: "flex" }}>
              <Button
                variant="contained"
                style={{
                  position:'relative',
                  fontSize:'1rem',
                  textTransform:'capitalize',
                  borderRadius:'25px',
                  letterSpacing:'2px',
                  fontWeight:'600',
                  padding:'13px 5%',
                  overflow:'hidden',
                  marginRight: "1rem",
                  cursor: "pointer",
                  display: "block",
                  width: "fit-content",
                  maxWidth: "250px",
                  backgroundColor: "linear-gradient(90deg, rgb(48, 188, 201) 3.55%, rgb(49, 57, 104) 100%)",
                  border: "solid 2px linear-gradient(90deg, rgb(48, 188, 201) 3.55%, rgb(49, 57, 104) 100%)",
                }}
              >
                Contact Us
              </Button>
              <Button variant="contained" style={{
                 position:'relative',
                 fontSize:'1rem',
                 textTransform:'capitalize',
                 borderRadius:'25px',
                 letterSpacing:'2px',
                 fontWeight:'600',
                 padding:'13px 5%',
                 overflow:'hidden',
                 backgroundColor: "linear-gradient(90deg, rgb(48, 188, 201) 3.55%, rgb(49, 57, 104) 100%)",
                 border: "solid 2px linear-gradient(90deg, rgb(48, 188, 201) 3.55%, rgb(49, 57, 104) 100%)",
                 cursor:'pointer'
              }}>
                Hire Now
              </Button>
            </Box>
          </Grid>
          <Grid item sm={6} lg={4} xl={4} sx={{
            width:'clamp(20rem 70vw 80rem)',
            flex: '0 0 33.333333%',
            maxWidth: '33.333333%',
            position:'relative',
            paddingRight:'15px',
            paddingLeft:'15px',
            verticalAlign:'middle',
            borderStyle:'none'
          }}>
            <img src={react} alt=".net" style={{width:'100%'}}/>
          </Grid>
        </Grid>
      </section>
    
    {/*-------------------2nd part------------------ */}

    <section style={{display:'block', opacity:'1',transform:'translateZ(0)',transitionDuration:'0.5s',transitionTimingFunction:'ease',paddingTop:'4rem',transitionProperty:'opacity,transform',}}>
        <Container>
            <Grid container sx={{width:'80%',maxWidth:'unset',paddingRight: '15px',paddingLeft: '15px',marginRight: 'auto',marginLeft: 'auto'}}>
                <Grid item xs={12} sx={{paddingRight:'0',paddingLeft:'0',flex: '0 0 100%',maxWidth: '100%',position:'relative',width:'100%'}}>
            <h2 style={{display:'block',fontSize: 'clamp(2rem, 4vw, 2.7rem)',textAlign: 'center',fontWeight: '400',marginBottom: '35px',lineHeight: '1.2'}}>
                <span style={{display:'block'}}>
                    <span style={{color:'#35598c',fontWeight:'500'}}>WebDuality</span>&nbsp;
                    serves as your one-stop shop for a variety of
                    <span style={{fontSize: 'clamp(2rem, 4vw, 2.7rem)',textAlign: 'center'}}>.Net</span>
                    Development Services
                </span>

            </h2>
                </Grid>
                <Grid item xs={12} sm={8} md={6}  sx={{position:'relative',width:'100%', flex: '0 0 41.666667%',maxWidth: '41.666667',paddingRight:'0',paddingLeft:'0'}}>
                <Box sx={{width:'clamp(280px, 100%, calc(100% - 30%))'}}>
                  <img src={img1} alt="" style={{width:'100%',height:'auto',maxWidth:'100%'}} />
                </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={6}sx={{position:'relative',width:'100%',display:'flex',flexDirection:'column',paddingRight:'0',paddingLeft:'0',fontSize:'0.95rem'}}>
                <Box>
                  <p style={{marginTop:'0',marginBottom:'1'}}>
                  A popular framework,.NET is mostly used to create software solutions that are strong, high-performing, and mission-centric, meeting various corporate goals.
                  </p>

                  <p style={{marginTop:'0',marginBottom:'1'}}>
                  At Web Duality,Our services for.NET development are extensive, and we also provide custom development methods. Hence, entrepreneurs can enter the market equipped with highly functional software that simplifies intricate business processes.
                  </p>
                  
                  <p style={{marginTop:'0',marginBottom:'1'}} >
                  For some ventures, our group makes undertaking level work area, portable, and web applications. Our group utilizes various.NET improvement innovations, such as.NET 7,.NET Center, MVC, and MAUI, to help associations in embracing computerized change in the mechanically progressed universe of today.
                  </p>
                </Box>
                </Grid>
            </Grid>
        </Container>

    </section>

    {/*-------------------------3rd part----------------------*/}
    
    <section style={{display:'block',margin:'0',padding:'0'}}>
      <Container sx={{width:'80%',maxWidth:'unset',paddingRight: '15px',paddingLeft: '15px',marginRight: 'auto',marginLeft: 'auto'}}>
        <Box sx={{opacity:'1',transform:'translateZ(0)',transitionDuration:'1s',transitionTimingFunction:'ease',transitionProperty:'opacity,transform',marginBottom:'3rem'}}>
          <h2 style={{
                display:'block',
                fontSize: 'clamp(2rem, 4vw, 2.7rem)',
                textAlign: 'center',
                fontWeight: '400',
                marginBottom: '35px',
                lineHeight:'1.2',
                marginBlockStart: '0.83em',
                marginBlockEnd: '0.83em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
          }}>

          <span style={{
            // display:'block',
            fontSize: 'clamp(2rem, 4vw, 2.7rem)',
            textAlign: 'center',
            fontweight: '400'
            }}>
      Why Choose &nbsp;
      <span
            style={{
              color:'#35598c',
              // display:'block',
              fontSize: 'clamp(2rem, 4vw, 2.7rem)',
              textAlign: 'center',
              fontweight: '500'
              }}>Web Duality</span>
            Technology as Your
            <span style={{color:'#35598c',fontWeight:'500'}}>.NET Development</span>
            Partner
          </span>

          <span style={{
            fontSize: 'clamp(0.8rem, 1vw, .85rem)',
            marginTop: '10px',
            display: 'block',
            color: '#999999',
            paddingLeft: '11%',
            paddingRight: '11%',
            textAlign:'center',
            fontWeight:'500'
    }} >
            
          At WebDuality, We think that innovation is possible! Our team comprises proficient.NET developers who follow industry guidelines and use their skills to create fast web, desktop, and mobile apps. To assist companies in achieving a quick time-to-market while introducing the best.NET solutions, we have developed a tried-and-true development methodology.
                    
          </span>

          </h2>
        </Box>

        <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap',marginRight:'-15px',marginLeft:'-15px',margin:'0',padding:'0',cursor:'default'}}>
          <Grid item xs={12} sm={5} lg={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'1.2s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            flex: '0 0 33.333333%',
            maxWidth: '33.333333%'

          }}>
            <Card sx={{
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    textAlign: 'center',
    fontSize: '.9rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '3.5rem 2rem 1.5rem',
    minHeight: '150px',
    height: '100%'
    }}>

    <img src = {img2} alt="" style={{
      content: "",
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#fff',
      height: '85px',
      width: '85px',
      backgroundSize: '60px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: '.85',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#333'
    }} />

    <span style={{
          textAlign: 'center',
          fontSize: '.9rem',
          color: '#333'
    }}>
      Business-centric .NET Development
    </span>
            </Card>

          </Grid>

          <Grid item xs={12} sm={5} lg={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'1.2s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px'

          }}>
            <Card sx={{
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    textAlign: 'center',
    fontSize: '.9rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '3.5rem 2rem 1.5rem',
    minHeight: '150px',
    height: '100%'
    }}>

    <img src = {img3} alt="" style={{
      content: "",
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#fff',
      height: '85px',
      width: '85px',
      backgroundSize: '60px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: '.85',
      textAlign: 'center',
      fontSize: '.9rem',
      color: '#333'
    }} />

    <span style={{
          textAlign: 'center',
          fontSize: '.9rem',
          color: '#333'
    }}>
     Agile Implementation with Dedicated Scrum Master
    </span>
            </Card>

          </Grid>

          <Grid item xs={12} sm={5} lg={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'1.2s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px'

          }}>
            <Card sx={{
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    textAlign: 'center',
    fontSize: '.9rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '3.5rem 2rem 1.5rem',
    minHeight: '150px',
    height: '100%'
    }}>

    <img src = {img4} alt="" style={{
      content: "",
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#fff',
      height: '85px',
      width: '85px',
      backgroundSize: '60px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: '.85',
      textAlign: 'center',
      fontSize: '.9rem',
      color: '#333'
    }} />

    <span style={{
          textAlign: 'center',
          fontSize: '.9rem',
          color: '#333'
    }}>
      On-Time Product Delivery with Quality Assurance
    </span>
            </Card>

          </Grid>

          <Grid item xs={12} sm={5} lg={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'1.2s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px'

          }}>
            <Card sx={{
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    textAlign: 'center',
    fontSize: '.9rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '3.5rem 2rem 1.5rem',
    minHeight: '150px',
    height: '100%'
    }}>

    <img src = {img5} alt="" style={{
      content: "",
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#fff',
      height: '85px',
      width: '85px',
      backgroundSize: '60px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: '.85',
      textAlign: 'center',
      fontSize: '.9rem',
      color: '#333'
    }} />

    <span style={{
          textAlign: 'center',
          fontSize: '.9rem',
          color: '#333'
    }}>
      Non-Disclosure Agreement Guaranteed
    </span>
            </Card>

          </Grid>

          <Grid item xs={12} sm={5} lg={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'1.2s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px'

          }}>
            <Card sx={{
    position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    textAlign: 'center',
    fontSize: '.9rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '3.5rem 2rem 1.5rem',
    minHeight: '150px',
    height: '100%'
    }}>

    <img src = {img6} alt="" style={{
      content: "",
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#fff',
      height: '85px',
      width: '85px',
      backgroundSize: '60px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: '.85',
      textAlign: 'center',
      fontSize: '.9rem',
      color: '#333'
    }} />

    <span style={{
          textAlign: 'center',
          fontSize: '.9rem',
          color: '#333'
    }}>
      Fully-Scalable .NET software solutions
    </span>
            </Card>

          </Grid>

          <Grid item xs={12} sm={5} lg={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'1.2s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px'

          }}>
            <Card sx={{
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    textAlign: 'center',
    fontSize: '.9rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '3.5rem 2rem 1.5rem',
    minHeight: '150px',
    height: '100%'
    }}>

    <img src = {img7} alt="" style={{
      content: "",
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#fff',
      height: '85px',
      width: '85px',
      backgroundSize: '60px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: '.85',
      textAlign: 'center',
      fontSize: '.9rem',
      color: '#333'
    }} />

    <span style={{
          textAlign: 'center',
          fontSize: '.9rem',
          color: '#333'
    }}>
      QA Testing and Maintenance Support
    </span>
            </Card>

          </Grid>


        </Grid>

      </Container>
    </section>


    {/*----------------------------4th part-------------------*/}
    
    <section style={{display:'block',margin:'0',padding:'0'}}>
      <Container sx={{width:'80%',maxWidth:'unset',paddingRight: '15px',paddingLeft: '15px',marginRight: 'auto',marginLeft: 'auto'}}>
        <Box sx={{opacity:'1',transform:'translateZ(0)',transitionDuration:'1s',transitionTimingFunction:'ease',transitionProperty:'opacity,transform',marginBottom:'3rem'}}>
          <h2 style={{
                display:'block',
                fontSize: 'clamp(2rem, 4vw, 2.7rem)',
                textAlign: 'center',
                fontWeight: '400',
                marginBottom: '35px',
                lineHeight:'1.2',
                marginBlockStart: '0.83em',
                marginBlockEnd: '0.83em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
          }}>

          <span style={{
            // display:'block',
            fontSize: 'clamp(2rem, 4vw, 2.7rem)',
            textAlign: 'center',
            fontweight: '400'
            }}>
      We Deliver &nbsp;
      <span
            style={{
              color:'#35598c',
              // display:'block',
              fontSize: 'clamp(2rem, 4vw, 2.7rem)',
              textAlign: 'center',
              fontweight: '500'
              }}>Personalized</span>&nbsp;
            .NET Solutions for Different Industries
          </span>

          <span style={{
            fontSize: 'clamp(0.8rem, 1vw, .85rem)',
            marginTop: '10px',
            display: 'block',
            color: '#999999',
            paddingLeft: '11%',
            paddingRight: '11%',
            textAlign:'center',
            fontWeight:'500'
    }} >
            Our group, as a reputable.NET improvement firm, gives tailored.NET on the web and versatile improvement answers for meet your business needs. Our.NET engineers have teamed up with both new and laid out organizations across different enterprises consistently, including:        
          </span>

          </h2>
        </Box>

        <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap',marginRight:'-15px',marginLeft:'-15px',margin:'0',padding:'0',cursor:'default'}}>
          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:' 1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new1} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c',
    }}>
      
      Fintech</h6>
   </Box>
            </Box>

          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:'1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new2} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c'}}>Education</h6>
   </Box>
            </Box>

          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:'1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new3} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c'}}>Travel</h6>
   </Box>
            </Box>

          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:'1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new4} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c'}}>Ecommerce</h6>
   </Box>
            </Box>

          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:'1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new5} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c'}}>Hospitality Management</h6>
   </Box>
            </Box>

          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:'1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new6} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c'}}>Healthcare</h6>
   </Box>
            </Box>

          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:'1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new7} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c'}}>Media & Entertainment</h6>
   </Box>
            </Box>

          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              justifyContent:'space-evenly',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:'1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new8} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c'}}>Public Care</h6>
   </Box>
            </Box>

          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{
            opacity: '1',
            transform: 'translateZ(0)',
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease',
            transitionProperty:'opacity,transform',
            paddingTop:'1.5rem',
            marginBottom:'1.5rem',
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',


          }}>
            <Box sx={{
              display:'flex',
              flexDirection:{sm:'column',md:'row'},
              alignItems:'center',
              justifyContent:'space-evenly',
              position: 'relative',
    borderRadius: '10px',
    background: '#fff',
    fontSize: '.8rem',
    color: '#333',
    border: '1px solid #ebebeb',
    padding: '1.5rem 2rem',
    minHeight: '133px',
    height: '100%'
    }}>

      <Box sx={{
        marginBottom: {sm:'0',md:'1.5rem'},
        marginRight:'1.5rem'
      }}>

      <Box sx={{width:'60px',display:'block'}}>
    <img src = {new9} alt="" style={{
      height: '100%',
      width: '100%',
      verticalAlign:'center',
      borderStyle:'none'
    }} />

</Box>

   </Box>

   <Box>
    <h6 style={{fontSize:'0.9rem',fontWeight:'700',color:'#35598c'}}>Logistics & Distribution</h6>
   </Box>
            </Box>

          </Grid>


        </Grid>

      </Container>
    </section>

    </div>
  );
};

export default React1;
