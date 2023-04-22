import React, { useState } from 'react';
import universityFeesData from './JSON/jsonFeesData';

const UniversityFeeStructure = () => {
    const [selectedFee, setSelectedFee] = useState("");
    const [selectedNationality, setSelectedNationality] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [feeAmount, setFeeAmount] = useState(0);

    const handleFeeSelection = (event) => {
        setSelectedFee(event.target.value);
        setSelectedNationality("");
        setSelectedCourse("");
        setSelectedLevel("");
        setFeeAmount(0);
    };

    const handleNationalitySelection = (event) => {
        setSelectedNationality(event.target.value);
        setSelectedCourse("");
        setSelectedLevel("");
        setFeeAmount(0);
    };

    const handleCourseSelection = (event) => {
        setSelectedCourse(event.target.value);
        setSelectedLevel("");
        setFeeAmount(0);
    };

    const handleLevelSelection = (event) => {
        setSelectedLevel(event.target.value);
        const fee = universityFeesData[selectedFee][selectedNationality][selectedCourse][event?.target?.value]?.amount;
        setFeeAmount(fee);
    };

    return (
        <div>
            <h1>University Fees Structure</h1>
            <div>
                <div style={{ padding: '5px' }}>
                    <label htmlFor="fee-select">Select Fee: </label>
                    <select id="fee-select" value={selectedFee} onChange={handleFeeSelection}>
                        <option value="">--select--</option>
                        {Object.keys(universityFeesData).map((fee) => (
                            <option key={fee} value={fee}>
                                {fee}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedFee && (
                    <div style={{ padding: '5px' }}>
                        <label htmlFor="nationality-select">Select Nationality: </label>
                        <select id="nationality-select" value={selectedNationality} onChange={handleNationalitySelection}>
                            <option value="">--select--</option>
                            {Object.keys(universityFeesData[selectedFee]).map((nationality) => (
                                <option key={nationality} value={nationality}>
                                    {nationality}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {selectedNationality && (
                    <div style={{ padding: '5px' }}>
                        <label htmlFor="course-select">Select Course: </label>
                        <select id="course-select" value={selectedCourse} onChange={handleCourseSelection}>
                            <option value="">--select--</option>
                            {Object.keys(universityFeesData[selectedFee][selectedNationality]).map((course) => (
                                <option key={course} value={course}>
                                    {course}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {selectedCourse && (
                    <div style={{ padding: '5px' }}>
                        <label htmlFor="level-select">Select Level: </label>
                        <select id="level-select" value={selectedLevel} onChange={handleLevelSelection}>
                            <option value="">--select--</option>
                            {Object.keys(universityFeesData[selectedFee][selectedNationality][selectedCourse]).map((level) => (
                                <option key={level} value={level}>
                                    {level}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedLevel && (
                    <div style={{ padding: '40px', fontWeight: 'bold' }}>
                        <label htmlFor='fee-amount'>Amount: </label>
                        {feeAmount}
                    </div>
                )}
            </div>

        </div>
    )
}

export default UniversityFeeStructure;
