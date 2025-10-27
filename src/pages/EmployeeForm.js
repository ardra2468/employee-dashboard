import React, { useState } from 'react';

function EmployeeForm() {
  const [form, setForm] = useState({ name: '', designation: '', location: '', salary: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Requirement: No need to post — just show the captured data locally
    console.log('Employee form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="container">
      <h2 className="coffee-title mb-3">Employee Form</h2>
      <form onSubmit={handleSubmit} className="card card-body form-coffee">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input name="designation" value={form.designation} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input name="location" value={form.location} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input name="salary" value={form.salary} onChange={handleChange} className="form-control" type="number" />
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" type="submit">Save (no network)</button>
          <button className="btn btn-secondary" type="button" onClick={() => setForm({ name: '', designation: '', location: '', salary: '' })}>Reset</button>
        </div>

        {submitted && <div className="alert alert-success mt-3">Form captured locally (check console)</div>}
      </form>
    </div>
  );
}

export default EmployeeForm;
