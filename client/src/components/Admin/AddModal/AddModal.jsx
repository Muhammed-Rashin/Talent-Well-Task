import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import instance from '../../../api/instance';
import { CircularProgress } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddModal({ open, setOpen, setTestimonials }) {
  const handleClose = () => setOpen(false);
  const [testimonialData, setTestimonialData] = useState({
    name: '',
    post: '',
    description: '',
  });
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const createTestimonial = async (e) => {
    setLoading(true);
    e.preventDefault();
    const base64 = await convertBase64(image);
    instance
      .post('/add-testimonial', { ...testimonialData, image: base64 })
      .then(() => {
        setLoading(false);
        instance.get('/get-testimonials').then(({ data }) => {
          setTestimonials(data);
          handleClose();
        });
      });
  };

  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <form onSubmit={createTestimonial}>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  value={testimonialData.name}
                  onChange={(e) =>
                    setTestimonialData({
                      ...testimonialData,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Post"
                  value={testimonialData.post}
                  onChange={(e) =>
                    setTestimonialData({
                      ...testimonialData,
                      post: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group mt-4">
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description"
                  value={testimonialData.description}
                  onChange={(e) =>
                    setTestimonialData({
                      ...testimonialData,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group mt-4">
                <label for="exampleFormControlFile1">Select Your Photo</label>
                <input
                  required
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={(event) => setImage(event.target.files[0])}
                  accept="image/*"
                />
              </div>
              <div className="w-100 d-flex justify-content-center">
                <button type="submit" className="btn btn-success mt-5">
                  Create
                </button>
              </div>
            </form>
            <div
              className={`d-flex justify-content-center mt-5 ${
                loading ? null : 'invisible'
              }`}
            >
              <CircularProgress />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AddModal;
