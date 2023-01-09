import React from 'react'

const DPO = () => {
  return (
    <main>
        <h1>DPO</h1>

        <div className='DPO'>
            <div> <img src={`assets/img/taques.jpg`} className="taques"/><p>Taques Fernandez Alcatraz</p></div>

            <ul>
                <li>Telefono: 722564484</li>
                <li>gmail: taques@gmail.com</li>
            </ul>
            <form action="">
                <label htmlFor="">Nombre</label>
                <input type="text"/>
                <label htmlFor="">Apellidos</label>
                <input type="text"/>
                <label htmlFor="">Telefono</label>
                <input type="number" />
                <label htmlFor="">Gmail <span>optional</span></label>
                <input type="text" />
                <label htmlFor="">Description</label>
                <input type="text"/>
                <button>Enviar</button>
            </form>            
        </div>
    </main>
  )
}

export default DPO