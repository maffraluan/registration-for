import { useState } from 'react';

import Photo from './Photo/Photo.Component';
import './photos.styles.css';
import './Photo/photo.styles.css';

const Modal = ({ title, id, handleChange, handleIsModalOpen, saveToArray }) => {
  return (
    <div className={'modal'}>
      <section className={'photo'}>
        <div className={'photo-content'}>
          <label>Titulo</label>
          <input value={title} name={'title'} type="text" onChange={handleChange} />

          <label>Id</label>
          <input value={id} name={'id'} type="number" onChange={handleChange} />
        </div>
        <div className={'buttons'}>
          <button onClick={saveToArray}>Salvar</button>
          <button onClick={handleIsModalOpen}>Fechar modal</button>
        </div>
      </section>
    </div>
  )
};

function Photos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [state, setState] = useState({
    title: '',
    id: '',
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };

  const handleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const saveToArray = e => {
    e.preventDefault();
    if (state.title === '' || state.id === '') return alert('Campo vazio!')
    saveNewPhotoPost(state);
    setState({
      title: '',
      id: ''
    });
  };

  const saveNewPhotoPost = photo => {
    const newPhotoPosts = [...photos, { photo }];
    setPhotos(newPhotoPosts);
  };

  const removePhotoById = index => {
    const newPhotoPosts = [...photos];
    newPhotoPosts.splice(index, 1);
    setPhotos(newPhotoPosts);
  };

  return (
    <div>
      <section className={'content'}>
        <div className={'d-flex'}>
          <h3>Criar foto!</h3>
          <button onClick={handleIsModalOpen}>+</button>
        </div>

      </section>
      <div>
        {!isModalOpen ||
          <Modal
            handleIsModalOpen={handleIsModalOpen}
            title={state.title} id={state.id}
            handleChange={handleChange}
            saveToArray={saveToArray}
          />}
      </div>

      <section className={'section-card'}>
        {photos.map((photo, index) => (
          <Photo
            removePhotoById={removePhotoById}
            photo={photo}
            key={index}
            title={state.title}
            id={state.id} />
        ))}
      </section>
    </div>
  )
}

export default Photos;