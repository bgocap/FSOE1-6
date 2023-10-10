import { useNotificationValue } from "./NotificationContext"

const Notification = () => {

  const style = {
    border: 'solid',
    borderRadius:10,
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const message = useNotificationValue()

  return (message && 
    <div style={style}>
      <em>{message}</em>
    </div>
  )
}

export default Notification
