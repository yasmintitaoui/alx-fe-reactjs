const UserProfile = (props) => {
    return (
        <div style={{ 
            border: '2px solid #ccc', 
            padding: '15px', 
            margin: '20px auto', 
            width: '300px', 
            borderRadius: '10px', 
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
        }}>
            <h2 style={{ 
                color: '#2c3e50', 
                marginBottom: '10px', 
                fontSize: '22px' 
            }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic' }}>{props.bio}</p>
        </div>
    );
};

export default UserProfile;
