import { MapPin, Clock, Calendar } from 'lucide-react';
import { useState } from 'react';

interface LocationSchedule {
  day: string;
  location: string;
  address: string;
  time: string;
  isCurrent?: boolean;
}

const weeklySchedule: LocationSchedule[] = [
  {
    day: 'Monday',
    location: 'Downtown Farmers Market',
    address: '123 Main Street',
    time: '7:00 AM - 12:00 PM',
  },
  {
    day: 'Tuesday',
    location: 'City Park',
    address: '456 Park Avenue',
    time: '8:00 AM - 2:00 PM',
  },
  {
    day: 'Wednesday',
    location: 'Business District',
    address: '789 Commerce Blvd',
    time: '7:00 AM - 1:00 PM',
  },
  {
    day: 'Thursday',
    location: 'University Campus',
    address: '321 College Drive',
    time: '8:00 AM - 3:00 PM',
  },
  {
    day: 'Friday',
    location: 'Downtown Farmers Market',
    address: '123 Main Street',
    time: '7:00 AM - 2:00 PM',
  },
  {
    day: 'Saturday',
    location: 'Weekend Market Square',
    address: '654 Market Lane',
    time: '8:00 AM - 4:00 PM',
  },
  {
    day: 'Sunday',
    location: 'Community Center',
    address: '987 Community Way',
    time: '9:00 AM - 2:00 PM',
  },
];

export function Locations() {
  // Get current day
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[new Date().getDay()];
  const currentLocation = weeklySchedule.find(schedule => schedule.day === currentDay);

  const [selectedDay, setSelectedDay] = useState(currentDay);
  const selectedSchedule = weeklySchedule.find(schedule => schedule.day === selectedDay);

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Find Us
          </h2>
          <p className="text-lg text-gray-700">
            We bring the coffee to you! Check our weekly schedule below.
          </p>
        </div>

        {/* Current Location Highlight */}
        {currentLocation && (
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg p-6 sm:p-8 mb-12 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-amber-100">We're here today!</p>
                <h3 className="text-2xl font-bold">{currentLocation.location}</h3>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-200" />
                <span>{currentLocation.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-200" />
                <span>{currentLocation.time}</span>
              </div>
            </div>
          </div>
        )}

        {/* Day Selector */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-amber-900" />
            <h3 className="text-xl font-bold text-amber-900">Weekly Schedule</h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {weeklySchedule.map(schedule => (
              <button
                key={schedule.day}
                onClick={() => setSelectedDay(schedule.day)}
                className={`py-3 px-4 rounded-lg font-medium transition-all ${
                  selectedDay === schedule.day
                    ? 'bg-amber-600 text-white shadow-md'
                    : schedule.day === currentDay
                    ? 'bg-amber-100 text-amber-900 border-2 border-amber-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-xs sm:text-sm">
                  {schedule.day.substring(0, 3)}
                </div>
                {schedule.day === currentDay && (
                  <div className="text-xs mt-1">Today</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Details */}
        {selectedSchedule && (
          <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
            <h4 className="text-xl font-bold text-amber-900 mb-4">
              {selectedSchedule.day}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-amber-900 mb-1">Location</p>
                    <p className="text-gray-700">{selectedSchedule.location}</p>
                    <p className="text-sm text-gray-600">{selectedSchedule.address}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-amber-900 mb-1">Hours</p>
                    <p className="text-gray-700">{selectedSchedule.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Schedule Table */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-amber-900 mb-6">Complete Weekly Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-amber-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-amber-900">Day</th>
                  <th className="px-4 py-3 text-left font-bold text-amber-900">Location</th>
                  <th className="px-4 py-3 text-left font-bold text-amber-900">Address</th>
                  <th className="px-4 py-3 text-left font-bold text-amber-900">Time</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((schedule, index) => (
                  <tr
                    key={schedule.day}
                    className={`border-t ${
                      schedule.day === currentDay
                        ? 'bg-amber-50 font-medium'
                        : index % 2 === 0
                        ? 'bg-white'
                        : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {schedule.day}
                        {schedule.day === currentDay && (
                          <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded">
                            Today
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">{schedule.location}</td>
                    <td className="px-4 py-3 text-gray-600">{schedule.address}</td>
                    <td className="px-4 py-3 text-gray-600">{schedule.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Locations and times are subject to change due to weather or special events. 
            Follow us on social media for real-time updates and location changes.
          </p>
        </div>
      </div>
    </section>
  );
}
