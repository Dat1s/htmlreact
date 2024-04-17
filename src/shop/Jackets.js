import React, { useState } from 'react';
import '../index.css';
import goose1 from "../img/goose1.PNG";
import goose2 from "../img/goose2.PNG";
import goose3 from "../img/goose3.PNG";
import goose4 from "../img/goose4.PNG";
import nike1 from "../img/nike1.PNG";
import nike2 from "../img/nike2.PNG";
import nike3 from "../img/nike3.PNG";
import nike4 from "../img/nike4.PNG";
import face1 from "../img/face1.PNG";
import face2 from "../img/face2.PNG";
import face3 from "../img/face3.PNG";
import face4 from "../img/face4.PNG";

function Jackets() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        imageSrc: '',
        title: '',
        description: '',
        price: ''
    });

    const openModal = (imageSrc, title, description, price) => {
        console.log("Opening modal with:", imageSrc, title, description, price);
        setModalContent({
            imageSrc,
            title,
            description,
            price
        });
        setModalOpen(true);
    };

    const closeModal = () => {
        console.log("Closing modal");
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

            {/* Canada Goose Jackets */}
            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={goose1}
                        alt="jacket 1" 
                        onClick={() => openModal(
                            goose1, 
                            'Canada Goose', 
                            'Description of Canada Goose jacket 1.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Canada Goose</h2>
                        <p>Description of Canada Goose jacket 1.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={goose2}
                        alt="jacket 2" 
                        onClick={() => openModal(
                            goose2, 
                            'Canada Goose', 
                            'Description of Canada Goose jacket 2.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Canada Goose</h2>
                        <p>Description of Canada Goose jacket 2.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={goose3}
                        alt="jacket 3" 
                        onClick={() => openModal(
                            goose3, 
                            'Canada Goose', 
                            'Description of Canada Goose jacket 3.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Canada Goose</h2>
                        <p>Description of Canada Goose jacket 3.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={goose4}
                        alt="jacket 4" 
                        onClick={() => openModal(
                            goose4, 
                            'Canada Goose', 
                            'Description of Canada Goose jacket 4.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Canada Goose</h2>
                        <p>Description of Canada Goose jacket 4.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            {/* Nike Jackets */}
            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={nike1}
                        alt="jacket 1" 
                        onClick={() => openModal(
                            nike1, 
                            'Nike', 
                            'Description of Nike jacket 1.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike</h2>
                        <p>Description of Nike jacket 1.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={nike2}
                        alt="jacket 2" 
                        onClick={() => openModal(
                            nike2, 
                            'Nike', 
                            'Description of Nike jacket 2.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike</h2>
                        <p>Description of Nike jacket 2.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={nike3}
                        alt="jacket 3" 
                        onClick={() => openModal(
                            nike3, 
                            'Nike', 
                            'Description of Nike jacket 3.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike</h2>
                        <p>Description of Nike jacket 3.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={nike4}
                        alt="jacket 4" 
                        onClick={() => openModal(
                            nike4, 
                            'Nike', 
                            'Description of Nike jacket 4.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>Nike</h2>
                        <p>Description of Nike jacket 4.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            {/* The North Face Jackets */}
            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={face1}
                        alt="jacket 1" 
                        onClick={() => openModal(
                            face1, 
                            'The North Face', 
                            'Description of The North Face jacket 1.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>The North Face</h2>
                        <p>Description of The North Face jacket 1.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={face2}
                        alt="jacket 2" 
                        onClick={() => openModal(
                            face2, 
                            'The North Face', 
                            'Description of The North Face jacket 2.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>The North Face</h2>
                        <p>Description of The North Face jacket 2.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={face3}
                        alt="jacket 3" 
                        onClick={() => openModal(
                            face3, 
                            'The North Face', 
                            'Description of The North Face jacket 3.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>The North Face</h2>
                        <p>Description of The North Face jacket 3.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={face4}
                        alt="jacket 4" 
                        onClick={() => openModal(
                            face4, 
                            'The North Face', 
                            'Description of The North Face jacket 4.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>The North Face</h2>
                        <p>Description of The North Face jacket 4.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

        </div>
    );
}

export default Jackets;
