import React, { useState } from 'react';
import bgImage from "../../assets/image 13.png";
import styles from "./Registration.module.css";

function Registration() {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !username || !email || !consent) {
            alert("Please fill out all fields");
            return;
        } else {
            const currentUser = { name, username, email, mobile };
            localStorage.setItem("currentUser", JSON.stringify({ name, username, email, mobile }));
        }
        console.log(JSON.parse(localStorage.getItem("currentUser")));
    };

    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.leftHeader}>
                    <h1 className={styles.h1}>
                        Discover new things on <br></br> SuperApp
                    </h1>
                </div>
                <img src={bgImage} className={styles.bgImage} alt="Registration" />
            </div>
            <div className={styles.right}>
                <div style={styles.rightHeader}>
                    <h2>Super App</h2>
                    <h3>Create your new account</h3>
                </div>
                <div className={styles.form}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {/* <label
							className={styles.label}
							style={{
								display: checkWarning && !name ? "block" : "none",
							}}>
							Field is required
						</label> */}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Username"
                            className={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {/* <label
                            className={styles.label}
                            style={{
                                display: checkWarning && !username ? "block" : "none",
                            }}>
                            Field is required
                        </label> */}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* <label
							className={styles.label}
							style={{
								display: checkWarning && !email ? "block" : "none",
							}}>
							Field is required
						</label> */}
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            placeholder="Mobile"
                            className={styles.input}
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        {/* <label
							className={styles.label}
							style={{
								display: checkWarning && !mobile ? "block" : "none",
							}}>
							Field is required
						</label> */}
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            value={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                        />
                        <label htmlFor="mobile">Share my registration data with Superapp</label>
                        {/* <label
							className={styles.label}
							style={{
								display: checkWarning && !shareData ? "block" : "none",
							}}
						>
							Check if you want to proceed
						</label> */}
                    </div>

                    <button className={styles.submit} type="submit" onClick={handleSubmit}>SIGN UP</button>
                </div>
                <div className={styles.footer}>
                    <p>
                        By clicking on Sign up. you agree to Superapp{" "} <span>Terms and Conditions of Use</span> 
                    </p>
                    <p>
                        To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span> 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration