import React, { useState } from 'react';
import './style.css';
import Table from '../../components/Admin/Table/Table';
import AddModal from '../../components/Admin/AddModal/AddModal';

function AdminPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className="main">
      <button
        onClick={() => setAddModalOpen(true)}
        className="btn btn-success mb-3"
        type="button"
      >
        Create Testimonial
      </button>
      <Table testimonials={testimonials} setTestimonials={setTestimonials} />

      <AddModal
        open={addModalOpen}
        setOpen={setAddModalOpen}
        setTestimonials={setTestimonials}
      />
    </div>
  );
}

export default AdminPage;
