import React, { useState } from 'react';
import '../index.css';
import dunk1 from "../img/dunk1.PNG";
import dunk2 from "../img/dunk2.PNG";
import dunk3 from "../img/dunk3.PNG";
import dunk4 from "../img/dunk4.PNG";
import dunk5 from "../img/dunk5.PNG";
import dunk6 from "../img/dunk6.PNG";
import dunk7 from "../img/dunk7.PNG";
import dunk8 from "../img/dunk8.PNG";
import dunk9 from "../img/dunk9.PNG";
import dunk10 from "../img/dunk10.PNG";
import dunk11 from "../img/dunk11.PNG";
import dunk12 from "../img/dunk12.PNG";

function Dunks() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        imageSrc: '',
        title: '',
        description: '',
        price: ''
    });

    const openModal = (imageSrc, title, description, price) => {
        setModalContent({
            imageSrc,
            title,
            description,
            price
        });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="product-grid">
            {modalOpen && (
                <div id="productModal" className="modal-overlay" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-content">
                        <img id="modal-image" src={modalContent.imageSrc} alt="Product Image" />
                        <div id="modal-description">
                            <h2>{modalContent.title}</h2>
                            <p>{modalContent.description}</p>
                            <p>{modalContent.price}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk1}
                        alt="dunk 1" 
                        onClick={() => openModal(
                            dunk1, 
                            'Nike Dunks', 
                            'Description of dunk 1.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 1.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk2}
                        alt="dunk 2" 
                        onClick={() => openModal(
                            dunk2, 
                            'Nike Dunks', 
                            'Description of dunk 2.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 2.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk3}
                        alt="dunk 3" 
                        onClick={() => openModal(
                            dunk3, 
                            'Nike Dunks', 
                            'Description of dunk 3.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 3.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk4}
                        alt="dunk 4" 
                        onClick={() => openModal(
                            dunk4, 
                            'Nike Dunks', 
                            'Description of dunk 4.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 4.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk5}
                        alt="dunk 5" 
                        onClick={() => openModal(
                            dunk5, 
                            'Nike Dunks', 
                            'Description of dunk 5.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 5.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk6}
                        alt="dunk 6" 
                        onClick={() => openModal(
                            dunk6, 
                            'Nike Dunks', 
                            'Description of dunk 6.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 6.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk7}
                        alt="dunk 7" 
                        onClick={() => openModal(
                            dunk7, 
                            'Nike Dunks', 
                            'Description of dunk 7.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 7.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk8}
                        alt="dunk 8" 
                        onClick={() => openModal(
                            dunk8, 
                            'Nike Dunks', 
                            'Description of dunk 8.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 8.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk9}
                        alt="dunk 9" 
                        onClick={() => openModal(
                            dunk9, 
                            'Nike Dunks', 
                            'Description of dunk 9.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 9.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk10}
                        alt="dunk 10" 
                        onClick={() => openModal(
                            dunk10, 
                            'Nike Dunks', 
                            'Description of dunk 10.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 10.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk11}
                        alt="dunk 11" 
                        onClick={() => openModal(
                            dunk11, 
                            'Nike Dunks', 
                            'Description of dunk 11.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 11.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={dunk12}
                        alt="dunk 12" 
                        onClick={() => openModal(
                            dunk12, 
                            'Nike Dunks', 
                            'Description of dunk 12.', 
                            '$20.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike Dunks</h2>
                        <p>Description of dunk 12.</p>
                        <p>$20.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>


            {/* Repeat similar structure for other dunks */}
            {/* ... */}
        </div>
    );
}

export default Dunks;
