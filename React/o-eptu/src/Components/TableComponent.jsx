import React, { useState } from 'react';
import Modal from '../Pages/Modal'; // Import the modal component
import '../CSS/Table.css'
const TableComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      id: 1,
      name: 'Event 1',
      startDate: '2024-08-01',
      startTime: '10:00 AM',
      endDate: '2024-08-01',
      endTime: '12:00 PM',
      amenities: 'Projector, Wi-Fi',
    },
    {
      id: 2,
      name: 'Event 2',
      startDate: '2024-08-05',
      startTime: '2:00 PM',
      endDate: '2024-08-05',
      endTime: '4:00 PM',
      amenities: 'Whiteboard, Coffee',
    },
    {
      id: 3,
      name: 'Event 3',
      startDate: '2024-08-10',
      startTime: '9:00 AM',
      endDate: '2024-08-10',
      endTime: '11:00 AM',
      amenities: 'Video Conference, Snacks',
    },
    {
      id: 4,
      name: 'Event 4',
      startDate: '2024-08-15',
      startTime: '1:00 PM',
      endDate: '2024-08-15',
      endTime: '3:00 PM',
      amenities: 'Flipchart, Water',
    },
    {
      id: 5,
      name: 'Event 5',
      startDate: '2024-08-20',
      startTime: '11:00 AM',
      endDate: '2024-08-20',
      endTime: '1:00 PM',
      amenities: 'Laptop, Printer',
    },
  ];

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Date</th>
            <th>End Time</th>
            <th>Amenities</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
              <td>{item.name}</td>
              <td>{item.startDate}</td>
              <td>{item.startTime}</td>
              <td>{item.endDate}</td>
              <td>{item.endTime}</td>
              <td>{item.amenities}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
};

export default TableComponent;
