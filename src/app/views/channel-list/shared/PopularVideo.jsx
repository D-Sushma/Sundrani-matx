import React from "react";
import { Box } from "@mui/material";
import MainVideoObject from "./MainVideoObject";

export default function PopularVideo() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          // border: '1px solid lightgray',
          backgroundColor: "whitesmoke",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              background: "linear-gradient(to right bottom,red, #fff, red)",
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "5px",
            }}
          >
            Popular Video
          </p>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {MainVideoObject.map((ele, i) => {
            // console.log('ele', ele);
            return (
              <>
                <Box
                  sx={{
                    width: "48%",
                    height: "150px",
                    border: "1px solid #72A2c0",
                    marginTop: 2,
                    marginLeft: 1,
                    marginBottom: 2,
                    borderRadius: "10px",
                    boxShadow: 5,
                  }}
                >
                  <Box sx={{ display: "flex", width: "50%", height: "100%" }}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        border: "3px solid black",
                        borderRadius: "10px 10px 0px 0px",
                      }}
                    >
                      <img
                        // key={i}
                        src={ele.channel_img}
                        alt="channel-logo"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                    <Box
                      // key={i}
                      sx={{
                        fontWeight: "bold",
                        fontSize: "larger",
                        width: "50%",
                        height: "100%",
                        //   backgroundColor: "gray",
                        //   color: "white",
                        borderRadius: "0px 0px 10px 10px",
                      }}
                    >
                      {ele.list_name}
                      sundrani video
                    </Box>
                  </Box>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
