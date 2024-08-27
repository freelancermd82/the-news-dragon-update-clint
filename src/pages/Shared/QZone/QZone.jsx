import React from 'react';
import { Image } from 'react-bootstrap';
import qzon1 from '../../../assets/qZone1.png';
import qzon2 from '../../../assets/qZone2.png';
import qzon3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div>
            <div className='bg-light mt-4 text-center'>
                <h3 className='pt-2'>Q_Zone</h3>
                <Image src={qzon1} fluid />
                <Image src={qzon2} fluid />
                <Image src={qzon3} fluid />
            </div>
        </div>
    );
};

export default QZone;