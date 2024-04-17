import React, { useState } from 'react';
import '../index.css';
import belt1 from "../img/gucci1.PNG"
import belt2 from "../img/gucci2.PNG"
import belt3 from "../img/gucci3.PNG"
import belt4 from "../img/gucci4.PNG"
import belt5 from "../img/lv1.PNG"
import belt6 from "../img/lv2.PNG"
import belt7 from "../img/lv3.PNG"
import belt8 from "../img/lv4.PNG"
import belt9 from "../img/diesel.PNG"
import belt10 from "../img/diesel2.PNG"
import belt11 from "../img/diesel3.PNG"
import belt12 from "../img/diesel4.PNG"

function Belts() {
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

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt1}
                        alt="belt 1" 
                        onClick={() => openModal(
                            belt1, 
                            'GG Marmont reversible belt', 
                            'Description of GG Marmont reversible belt.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont reversible belt</h2>
                        <p>Description of GG Marmont reversible belt.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>



            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt2}
                        alt="belt 2" 
                        onClick={() => openModal(
                            belt2, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt3}
                        alt="belt 3" 
                        onClick={() => openModal(
                            belt3, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt4}
                        alt="belt 4" 
                        onClick={() => openModal(
                            belt4, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt5}
                        alt="belt 5" 
                        onClick={() => openModal(
                            belt5, 
                            'GG Marmont reversible belt', 
                            'Description of GG Marmont reversible belt.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont reversible belt</h2>
                        <p>Description of GG Marmont reversible belt.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt6}
                        alt="belt 6" 
                        onClick={() => openModal(
                            belt6, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt7}
                        alt="belt 7" 
                        onClick={() => openModal(
                            belt7, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt8}
                        alt="belt 8" 
                        onClick={() => openModal(
                            belt8, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

                        <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt9}
                        alt="belt 9" 
                        onClick={() => openModal(
                            belt9, 
                            'GG Marmont reversible belt', 
                            'Description of GG Marmont reversible belt.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont reversible belt</h2>
                        <p>Description of GG Marmont reversible belt.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt10}
                        alt="belt 10" 
                        onClick={() => openModal(
                            belt10, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt11}
                        alt="belt 11" 
                        onClick={() => openModal(
                            belt11, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={belt12}
                        alt="belt 12" 
                        onClick={() => openModal(
                            belt12, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div> 
            {/* ... Continue with other product cards similarly */}
            
        </div>
    );
}

export default Belts;
