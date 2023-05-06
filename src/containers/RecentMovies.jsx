import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useGetMoviesQuery } from "../reducer/apiSlice";

export default function RecentMovies() {
    const { data, isFetching } = useGetMoviesQuery();

    return (
        <Grid2 container display="grid" gap={5}>
            <Typography variant="h5" color="text.secondary" fontWeight={700}>
                Recent Movies
            </Typography>
            <Box sx={{ overflowX: "auto" }}>
                <Grid container columnGap={2} flexWrap="nowrap">
                    {isFetching
                        ? [...Array(4)].map((item) => (
                              <Grid>
                                  <Grid2 sx={{ width: "84px" }}>
                                      <Skeleton
                                          variant="rectangular"
                                          sx={{
                                              width: "84px",
                                              height: "108px",
                                          }}
                                      />
                                      <Skeleton variant="text" width="60%">
                                          <Typography
                                              variant="subtitle1"
                                              color="text.secondary"
                                          >
                                              .
                                          </Typography>
                                      </Skeleton>
                                  </Grid2>
                              </Grid>
                          ))
                        : data.Search.map((item) => (
                              <Grid>
                                  <Grid2 sx={{ width: "84px" }}>
                                      <img
                                          src={item.Poster}
                                          alt={item.Title}
                                          width={84}
                                          height={108}
                                          style={{
                                              borderRadius: 4,
                                              border: "2px solid #3a3d48",
                                          }}
                                      />
                                      <Typography
                                          variant="subtitle1"
                                          color="text.secondary"
                                      >
                                          {item.Title}
                                      </Typography>
                                  </Grid2>
                              </Grid>
                          ))}
                </Grid>
            </Box>
        </Grid2>
    );
}
