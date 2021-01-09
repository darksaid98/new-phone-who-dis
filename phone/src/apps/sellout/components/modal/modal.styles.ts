import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme ) => ({
  root: {
    position: 'absolute',
    width: "100%",
    backgroundColor: '#F9F9F9',
    height: '100%',
    margin: "auto",
    textAlign: "center",
    fontFamily: "'Libre Franklin', sans-serif"
  },
  hidden: {
    display: 'none'
  },
  header: {
    background: 'red',
    width: '100%',
    height: '30%'
  },
  closeButton: {
    position: 'absolute',
    background: '#fff',
    outline: 'none',
    color: '#838383',
    top: 10,
    left: 5,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "'Libre Franklin', sans-serif",
    alignItems: 'center',
    borderRadius: 50,
    '&:hover': {
      background: '#fff'
    },
    
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 5,
    color: '#838383',
    fontSize: '18px',
    fontWeight: 500,
    padding: 5,
    outline: 'none',
    width: '55',
    border: 'none',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    background: '#2bad85',
    position: 'absolute',
    top: 10,
    right: 100,
    color: '#fff',
    fontSize: '18px',
    fontWeight: 500,
    padding: 7,
    outline: 'none',
    width: '55',
    border: 'none',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    margin: 'auto',
  },
  titleSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20px',
  },
  listingTitle: {
    textAlign: 'left',
    width: '90%',
    margin: 'auto',
    marginTop: '5px',
    color: '#000',
    fontWeight: 600,
    fontSize: '32px',
    fontFamily: "'Libre Franklin', sans-serif",
    borderBottom: '3px solid #838383',
  },
  priceContainer: {
    background: '#FF4747',
    borderRadius: 10,
    color: '#fff',
    fontFamily: "'Libre Franklin', sans-serif",
    marginTop: 35,
    padding: 5
  },
  metaContainer: {
    width: '90%',
    marginTop: '3em'
  },
  metaSection: {
    display: 'block',
    width: '90%',
    paddingBottom: 5,
    borderBottom: '2px solid #838383'
  },
  metaDetail: {
    color: '#000',
    textAlign: 'left',
    fontWeight: 600,
    fontFamily: "'Libre Franklin', sans-serif",
  },
  descContianer: {
    float: 'left',
    fontSize: '18',
    color: '#504F4F'
  }
}))

export default useStyles;