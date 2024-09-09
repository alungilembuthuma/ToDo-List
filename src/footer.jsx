import React from 'react';

let styles = {
  footer: {
    backgroundColor: '#7bd0ec',
    padding: '10px',
    textAlign: 'center',
    color: '#333'
    
  }
};

export default function Footer() {
  return (
    <div style={{marginTop:"2%"}}>
      <footer style={styles.footer}>
        <p style={{fontSize:"20px"}}>&copy; Task 7 Alungile Mbuthuma To Do List App. All rights reserved.</p>
      </footer>
    </div>
  );
}