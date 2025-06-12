import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">About Page</h1>
      <p className="text-gray-700">
        This is the a project of SENG8130 Software Quality Applications Lab 2025 Spring
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-green-600 text-black px-4 py-2 rounded ml-2"
      >
        Go to Homepage
      </button>

    </div>
  )
}

export default AboutPage