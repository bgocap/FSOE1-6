import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector(state=>state.notificationMessage)
  const style = {
    display:'none',
    borderRadius: 10,
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <>
      {message && 
        <div style={{...style,display:''}}>
          {message}
        </div>}
    </>
  )
}

export default Notification