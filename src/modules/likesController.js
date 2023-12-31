const fetchLikes = async (involvmentUrl) => {
  const url = `${involvmentUrl}likes`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const text = await response.text();
      if (text.trim() === '') {
        return {};
      }
      const data = JSON.parse(text);
      return data;
    }
    throw new Error(`Request failed with status ${response.status}`);
  } catch (error) {
    return error;
  }
};
const storeLike = async (involvmentUrl, showId) => {
  const url = `${involvmentUrl}likes`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: showId }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export { fetchLikes, storeLike };