import React from 'react'
import QrCode2Icon from '@mui/icons-material/QrCode2';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../css/Qrcard.css'
export default function Qrcard() {
    return (
        <div>
            <Card className="box">
                <QrCode2Icon sx={{ fontSize: 200 }} className="qr_img"/>
                <CardText className="text">For Admission Fee payment Scan the QR Code</CardText>
                <CardBody>    
                <a href="#">Full Screen Popup</a>
                </CardBody>
            </Card>
        </div>
    )
}
