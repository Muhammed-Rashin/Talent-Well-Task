import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import instance from '../../../api/instance';
import EditModal from '../EditModal/EditModal';
import './style.css';

function Table({ testimonials, setTestimonials }) {
  const [editOpen, setEditOpen] = useState(false);

  function getTestimonials() {
    instance.get('/get-testimonials').then(({ data }) => {
      setTestimonials(data);
    });
  }

  const doDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this testimonial!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        instance.post('/delete-testimonial', { id }).then(() => {
          swal('Successfully deleted!', {
            icon: 'success',
          });
          getTestimonials();
        });
      }
    });
  };

  useEffect(() => {
    getTestimonials();
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Post</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((element) => {
            return (
              <tr>
                <td>
                  <div className="testimonial-image">
                    <img src={element.photo} alt="Author" />
                  </div>
                </td>
                <td>{element.name}</td>
                <td>{element.post}</td>
                <td>{element.description}</td>
                <td>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item"
                        onClick={() => setEditOpen(element)}
                      >
                        Edit
                      </a>

                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        onClick={() => doDelete(element._id)}
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditModal
        setEditOpen={setEditOpen}
        editOpen={editOpen}
        getTestimonials={getTestimonials}
      />
    </div>
  );
}

export default Table;
