import { useState } from 'react'

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (name.trim() === '') {
      nextErrors.name = 'Name is required.'
    }

    if (email.trim() === '') {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (phone.trim() === '') {
      nextErrors.phone = 'Phone number is required.'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    onAddContact({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    })

    setName('')
    setEmail('')
    setPhone('')
    setErrors({})
  }

  return (
    <section className="panel">
      <h2>Add Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter phone number"
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <button type="submit" className="primary-button">
          Add Contact
        </button>
      </form>
    </section>
  )
}

export default ContactForm