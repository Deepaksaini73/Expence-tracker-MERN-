import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../../Utils";
import "./groupForm.css";

const GroupForm = () => {
    const [privacyType, setPrivacyType] = useState("public");
    const [emails, setEmails] = useState([""]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Group emails:", emails);
        handleSuccess("Group created successfully!");
    };
    const addMemberEmail = (index, value) => {
        const updatedEmails = [...emails];
        updatedEmails[index] = value;
        setEmails(updatedEmails);
    }
    const handleAddEmailField = () => {
        setEmails([...emails, ""]);
    };
    const removeMemberEmail = (index) => {
        const updatedEmails = emails.filter((_, i) => i !== index);
        setEmails(updatedEmails);
    }

    return (
        <form className="group-form" onSubmit={handleFormSubmit}>
            {/* Group Name */}
            <label>
               <p> Group Name <span className="required">*</span></p>
                <input
                    type="text"
                    placeholder="Enter group name"
                    required
                />
            </label>

            {/* Group Description */}
            <label>
                <p>Group Description</p>
                <textarea
                    placeholder="What is this group for?"
                ></textarea>
            </label>

            {/* Privacy Type */}
            <label>
                <p>Privacy Type <span className="required">*</span></p>
                <select
                    value={privacyType}
                    onChange={(e) => setPrivacyType(e.target.value)}
                    required
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </label>

            {/* Password/Access Code (if private) */}
            {privacyType === "private" && (
                <label>
                    <p>Password/Access Code</p>
                    <input
                        type="password"
                        placeholder="Enter a password for private group"
                    />
                </label>
            )}

            {/* Add Members */}
            <label>
                Add Members
                <div>
                    {emails.map((email, index) => (
                        <div key={index} className="email-field">
                            <input
                                type="email"
                                placeholder={`Enter ${index + 1} member email `}
                                value={email}
                                onChange={(e) => addMemberEmail(index, e.target.value)}
                                required
                            />
                            {emails.length > 1 && (
                                <button className="remove-memebr-btn"
                                    type="button"
                                    onClick={() => removeMemberEmail(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <span className="add-member-button" onClick={handleAddEmailField}>
                    Add More User
                </span>
            </label>

            {/* Group Category */}
            <label>
                Group Category
                <select>
                    <option value="technology">Roomates</option>
                    <option value="gaming">Friends</option>
                    <option value="education">Family Brothers</option>
                    <option value="sports">Trip Friends</option>
                </select>
            </label>

            {/* Upload Group Icon or Banner */}
            <label>
                Upload Group Icon or Banner
                <input type="file" />
            </label>

            {/* Submit Button */}
            <button className="submit-btn" type="submit">Create Group</button>
            <ToastContainer />
        </form>
    );
};

export default GroupForm;
