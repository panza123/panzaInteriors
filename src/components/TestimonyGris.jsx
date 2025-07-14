import React, { useState } from 'react'

const testimonies = [
  { name: 'Amaka O.', text: 'My home feels like a modern sanctuary now. Thank you for your amazing design work!', rating: 4.5 },
  { name: 'Daniel E.', text: 'Our office space is so inspiring. Sleek and professional. Incredible work!', rating: 4.3 },
  { name: 'Zainab M.', text: 'Perfect colors and furniture. Couldn’t be happier with the result.', rating: 4.0 },
  { name: 'Uche N.', text: 'They brought elegance and warmth into every corner of our space.', rating: 4.7 },
  { name: 'Lara T.', text: 'Everything was flawless. The design elevated our lifestyle.', rating: 4.4 },
  { name: 'Kelvin J.', text: 'Absolutely stunning work. Felt like a luxury hotel!', rating: 4.6 },
  { name: 'Chioma K.', text: 'They exceeded all my expectations. Every detail was perfect.', rating: 4.2 },
  { name: 'Tobi A.', text: 'Professional, timely, and creative. Great experience!', rating: 4.1 },
  { name: 'Fatima Y.', text: 'Now my guests won’t stop complimenting the space.', rating: 4.0 },
  { name: 'Gbenga M.', text: 'Beautiful transformation. Highly recommend this team!', rating: 4.5 },
]

const TestimonyGrid = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(testimonies.length / perPage)

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const visibleTestimonials = testimonies.slice(
    currentPage * perPage,
    currentPage * perPage + perPage
  )

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <div className="flex items-center gap-1 text-yellow-400 mt-2">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <span key={`full-${i}`}>&#9733;</span> // ★
          ))}
        {halfStar && <span>&#189;</span>} {/* ½ star */}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300">&#9733;</span>
          ))}
        <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-xl transition hover:shadow-lg"
          >
            <p className="text-gray-700 italic mb-3">“{t.text}”</p>
            <h3 className="text-sm font-semibold text-gray-900">- {t.name}</h3>
            {renderStars(t.rating)}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 text-gray-800 cursor-pointer rounded hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-black text-white cursor-pointer rounded hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TestimonyGrid
