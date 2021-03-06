import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';

const items = [
  {
    productname: 'DJI Mini3 Pro',
    image:
      'https://www.bhphotovideo.com/images/images1500x1500/dji_cp_ma_00000492_02_mini_3_pro_with_1700260.jpg',
  },
  {
    productname: 'DJI Air 2S',
    image:
      'https://www.fortress.com.hk/medias/1-inch-CMOS-Sensor-12312360.jpg?context=bWFzdGVyfGZyb250em9vbXw1NDUyNnxpbWFnZS9qcGVnfGZyb250em9vbS9oNDcvaDAyLzk3MjM5MjEyMzU5OTguanBnfDBiODcxZmQ5MWRkYjA5ZDRmZDZmY2U4ZDcyOTQ2ODY4ZWJlMDA5YjEyN2ZlNjRkNjgzMzUxZGRjN2NkNGRmMjc',
  },
  {
    productname: 'DJI FPV',
    image:
      'https://www.scandinavianphoto.se/globalassets/1050797.jpg?ref=81F07EDA5A&w=960&h=960&mode=max',
  },
];

const conditions = [
  {
    size: 'small',
    color: 'success',
    variant: 'contained',
    conditionname: '??????',
  },
  {
    size: 'small',
    color: 'secondary',
    variant: 'contained',
    conditionname: '??????',
  },
  {
    size: 'small',
    color: 'error',
    variant: 'contained',
    conditionname: '??????',
  },
  {
    size: 'small',
    variant: 'contained',
    conditionname: '??????',
  },
  {
    size: 'small',
    variant: 'outlined',
    conditionname: '??????',
  },
];

const images = [
  {
    url: 'https://cdn.shopify.com/s/files/1/0253/9057/9791/files/banner-bg-70e8e8aba7fefef8156830bddbc3f151_1024x1024.jpg?v=1567792030',
    title: 'DJI Home Banner',
    width: '100%',
  },
];
//
// function createData(
//   index: number,
//   productName: string,
//   condition: string,
//   quantity: number
// ) {
//   return { index, productName, condition, quantity };
// }

// const rows = [
//   createData(1, 'ABC', 'ASD', 0),
//   createData(2, 'ABC', 'ASD', 0),
//   createData(3, 'ABC', 'ASD', 0),
//   createData(4, 'ABC', 'ASD', 0),
// ];

const App = () => {
  const [records, setRecords] = useState([]);

  const onAdd = (productname, conditionname) => {
    const detail = {
      productname: productname,
      conditionname: conditionname,
    };
    let newRecords = [...records];
    newRecords.push(detail);
    setRecords(newRecords);
  };

  const deleteRecord = (index) => {
    let newRecords = []
    for (let i = 0; i < records.length; i++) {
      if (i !== index){
        newRecords.push(records[i])
      }
    }
    setRecords(newRecords)
  };
  //  const [records, setRecords] = useState([]);
  //  const {conditionname} = detail

  // const addRecord = (detail) => {
  //  let newRecords = [...records];
  // newRecords.push(detail);
  // setRecords(newRecords);
  // }

  // const [clickedButton, setClickedButton] = useState('');

  // const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();

  //   const button: HTMLButtonElement = event.currentTarget;
  //   setClickedButton(button.name);
  // };

  //Banner
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

  //MailIcon
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon />
          <Typography variant="h6">DJI</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 6,
          }}
        >
          <div>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                minWidth: 300,
                width: '100%',
              }}
            >
              {images.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}
                >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>

            <Grid
              container
              spacing={1}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h4"
                  justify
                  content="flex-end"
                  color="textPrimary"
                  gutterButton
                >
                  DJI SCAN CHECK PROGRAM
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={1}></Grid>
                  <Grid item xs>
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      paragraph
                    >
                      Gather precise plant-level data using the P4 Multispectral
                      ??? a high-precision drone with a seamlessly integrated
                      multispectral imaging system built for agriculture
                      missions, environmental monitoring, and more.
                    </Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    More
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Contact US
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Box>
      </main>

      {/* <Grid Container>
        <Typography size="small" color="textPrimary" align="center" spacing={2}>
          {clickedButton !== ''
            ? `You have clicked "${clickedButton}"`
            : 'No button clicked yet'}
        </Typography>
      </Grid> */}

      <Grid
        direction="row"
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
      >
        {items.map(({ productname, image }, index) => (
          <Grid key={index} item>
            <Card flex={1}>
              <CardMedia
                component="img"
                height="250"
                image={image}
                alt={productname}
              />
              <CardContent>
                <Typography variant="h5" color="textPrimary">
                  {productname}
                </Typography>
              </CardContent>
              <CardActions>
                {conditions.map(({ conditionname, ...props }, index) => (
                  <Button
                    key={index}
                    {...props}
                    onClick={() => onAdd(productname, conditionname)}
                    className="button"
                    // name={productname + conditionname}
                  >
                    {conditionname}
                  </Button>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid Container sx={{ p: 4 }}></Grid>

      <Box
        sx={{
          width: 1 / 2,
          position: 'absolute',
          left: '25%',
          zIndex: 'modal',
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="center">Condition</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th">{index+1}</TableCell>
                  <TableCell component="th">{item.productname}</TableCell>
                  <TableCell align="center">{item.conditionname}</TableCell>
                  <IconButton aria-lable="delete" onClick={() => deleteRecord(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        
        <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
     
    </Box>
      </Box>
    </React.Fragment>
  );
};

export default App;
