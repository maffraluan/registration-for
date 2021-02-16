import './photo.styles.css';

function Photo({ removePhotoById }) {
  return (
    <div className={'card'}>
      <div className={'photo-buttons'}>
        <button>Editar</button>
        <button onClick={removePhotoById}>Excluir</button>
      </div>
    </div>
  )
}

export default Photo;