import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import instance from '../../../api/instance';

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

function EditModal({ editOpen, setEditOpen, getTestimonials }) {
  const handleClose = () => setEditOpen(false);
  const [testimonialData, setTestimonialData] = useState({
    name: '',
    post: '',
    description: '',
    id: '',
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    setTestimonialData({
      name: editOpen.name,
      post: editOpen.post,
      description: editOpen.description,
      id: editOpen._id,
    });
  }, [editOpen]);

  const doEdit = async (e) => {
    e.preventDefault();
    instance.post('/edit-testimonial', testimonialData).then(() => {
      getTestimonials();
      handleClose()
    });
  };
  return (
    <div>
      <Modal
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <form onSubmit={doEdit}>
              <div className="form-group ">
                <input
                  required
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
                  rows={8}
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

              <div className="w-100 d-flex justify-content-center">
                <button type="submit" className="btn btn-success mt-5">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EditModal;
