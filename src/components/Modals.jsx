export default ({member, handleClose}) => {
  
  return (
    <dialog id="modal-member" open>
      <artical>
        <header>
          <button aria-label="Close" rel="prev" onClick={handleClose}>X</button>
          <p>
            <center><h1><strong>{member.name}</strong></h1></center>
          </p>
        </header>
        <hgroup>
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <img style={{width:'200px'}} 
            src={`images/${member.slug}.svg`} 
            alt={member.name} />
            <hgroup>
              <h1></h1>
              <p>{member.bio}</p>                
            </hgroup>
          </div>
        </hgroup>
      </artical>
    </dialog>
  )
}