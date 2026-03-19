/**
 * API Service - Debugging version
 */

// Hardcode the URL temporarily for debugging
const API_URL = 'http://localhost:3000';

console.log('🔍 API_URL:', API_URL);

export const testConnection = async () => {
  const url = `${API_URL}/test`;
  console.log('📡 Calling:', url);
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // Explicitly set CORS mode
    });
    
    console.log('📥 Response:', response);
    console.log('📥 Status:', response.status);
    console.log('📥 OK:', response.ok);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Data:', data);
    
    return data;
  } catch (error) {
    console.error('❌ Full Error:', error);
    console.error('❌ Error Name:', error.name);
    console.error('❌ Error Message:', error.message);
    throw error;
  }
};

export const getServerStatus = async () => {
  const url = `${API_URL}/`;
  console.log('📡 Calling:', url);
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    
    console.log('📥 Response:', response);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Data:', data);
    return data;
  } catch (error) {
    console.error('❌ Full Error:', error);
    throw error;
  }
};