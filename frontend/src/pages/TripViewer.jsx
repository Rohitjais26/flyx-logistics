// client/src/pages/TripViewer.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Placeholder data structure (matches the Trip model we discussed earlier)
const placeholderTrip = {
    title: "The Ultimate Swiss Alps Adventure",
    client: "Sarah Connor",
    agentName: "Jane Doe Travel",
    itinerary: [
        {
            date: "2025-12-01",
            type: "Flight",
            title: "Arrival in Zurich (ZRH)",
            details: "Flight LX13 from New York (JFK). Landing at 10:30 AM. Transfer to hotel by private car.",
            location: "Zurich, Switzerland"
        },
        {
            date: "2025-12-01",
            type: "Accommodation",
            title: "Check-in at The Dolder Grand",
            details: "Deluxe room with lake view. Confirmation #DLD12345.",
            location: "Zurich, Switzerland"
        },
        {
            date: "2025-12-02",
            type: "Activity",
            title: "Day trip to Lucerne & Mount Pilatus",
            details: "Guided tour includes a lake cruise and the steepest cogwheel railway climb. Lunch included.",
            location: "Lucerne, Switzerland"
        },
    ],
    documents: ['booking_confirmation.pdf', 'visa_guide.pdf']
};


const TripViewer = () => {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch data when the component loads
    useEffect(() => {
        const fetchTrip = async () => {
            try {
                // The backend API route we will create
                const response = await axios.get(`/api/trips/${tripId}/view`);
                // For now, we use the placeholder until the backend is fully connected
                setTrip(response.data || placeholderTrip); 
                setLoading(false);
            } catch (err) {
                console.error("Error fetching trip:", err);
                setError('Could not load itinerary. It may not exist or the link is expired.');
                setLoading(false);
                setTrip(placeholderTrip); // Show placeholder if real fetch fails
            }
        };

        fetchTrip();
    }, [tripId]);
    
    // --- Loading & Error States ---
    if (loading) return <div className="text-center p-8">Loading your trip itinerary...</div>;
    if (error) return <div className="text-center p-8 text-red-600">{error}</div>;
    if (!trip) return <div className="text-center p-8">Trip not found.</div>;

    // --- Main Itinerary Display ---
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-blue-800 text-white p-10 shadow-lg">
                <h1 className="text-4xl font-extrabold">{trip.title}</h1>
                <p className="mt-2 text-xl">For: {trip.client}</p>
                <p className="text-sm opacity-75">Planned by: {trip.agentName}</p>
            </header>

            <div className="container mx-auto p-6 lg:p-12">
                <h2 className="text-3xl font-bold mb-8 border-b pb-2 text-blue-900">Your Detailed Itinerary</h2>

                {trip.itinerary.map((segment, index) => (
                    <div key={index} className="flex flex-col md:flex-row mb-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
                        
                        {/* Date/Time Column */}
                        <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0 md:border-r md:pr-6">
                            <p className="text-lg font-semibold text-gray-500">
                                {new Date(segment.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                            </p>
                            <span className={`text-sm font-medium px-3 py-1 rounded-full mt-1 inline-block ${
                                segment.type === 'Flight' ? 'bg-indigo-100 text-indigo-800' :
                                segment.type === 'Accommodation' ? 'bg-green-100 text-green-800' :
                                'bg-yellow-100 text-yellow-800'
                            }`}>
                                {segment.type}
                            </span>
                        </div>
                        
                        {/* Details Column */}
                        <div className="md:w-3/4 md:pl-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{segment.title}</h3>
                            <p className="text-gray-600 mb-3">{segment.details}</p>
                            <p className="text-sm font-medium text-blue-600">
                                Location: {segment.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Documents Section */}
            <footer className="bg-gray-200 p-8 mt-10">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Trip Documents</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                    {trip.documents.map((doc, index) => (
                        <a 
                            key={index} 
                            href={`/documents/${doc}`} // Adjust URL to your actual document storage
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-150 text-blue-600 font-medium border border-blue-300"
                        >
                            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            {doc}
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default TripViewer;