import '../assets/styles/components/popUp_styles.css'

interface Props {
  action: string;
}

export const PopUp = ({ action }: Props) => {

  const newAction = action.toUpperCase();

  return (
    <div className="popup-container">
      <div id="popup" className="popup">
        <div className="popup-content">
          {newAction !== 'PAYMENT' && <p>{`The product was successfully ${newAction === 'POST' ? 'registered' : newAction === 'PUT' ? 'modified' : 'removed'}`}</p>}
          {newAction === 'PAYMENT' && <p>The payment was successfully done.</p>}
          <button className="act-btn" onClick={() => { window.location.href = '/catalog' }}>Accept</button>
          {/* <Link to='/catalog'>
          </Link> */}
        </div>
      </div>
    </div>
  )
}