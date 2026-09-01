import { getAuth } from "firebase/auth";

const API_URL = "http://localhost:5000/api";

const getAuthHeaders = async () => {
    const user = getAuth().currentUser;

    if (!user) {
        throw new Error("You must be logged in.");
    }

    const token = await user.getIdToken();

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};

export const getConcerts = async () => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_URL}/concerts`, {
        headers,
    });

    if (!response.ok) {
        throw new Error("Failed to fetch concerts.");
    }

    return response.json();
};

export const createConcert = async (concert: {
    artist: string;
    venue: string;
    city: string;
    date: string;
}) => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_URL}/concerts`, {
        method: "POST",
        headers,
        body: JSON.stringify(concert),
    });

    if (!response.ok) {
        throw new Error("Failed to create concert.");
    }

    return response.json();
};

export const updateConcert = async (
    id: string,
    concert: {
        artist: string;
        venue: string;
        city: string;
        date: string;
    }
) => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_URL}/concerts/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(concert),
    });

    if (!response.ok) {
        throw new Error("Failed to update concert.");
    }

    return response.json();
};

export const deleteConcert = async (id: string) => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_URL}/concerts/${id}`, {
        method: "DELETE",
        headers,
    });

    if (!response.ok) {
        throw new Error("Failed to delete concert.");
    }

    return response.json();
};

export const getReviews = async (concertId: string) => {
    const headers = await getAuthHeaders();

    const response = await fetch(
        `${API_URL}/reviews/concert/${concertId}`,
        {
            headers,
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch reviews.");
    }

    return response.json();
};

export const createReview = async (
    concertId: string,
    review: {
        rating: number;
        comment?: string;
    }
) => {
    const headers = await getAuthHeaders();

    const response = await fetch(
        `${API_URL}/reviews/concert/${concertId}`,
        {
            method: "POST",
            headers,
            body: JSON.stringify(review),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create review.");
    }

    return response.json();
};

export const deleteReview = async (id: string) => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_URL}/reviews/${id}`, {
        method: "DELETE",
        headers,
    });

    if (!response.ok) {
        throw new Error("Failed to delete review.");
    }

    return response.json();
};

export const getStats = async () => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_URL}/stats`, {
        headers,
    });

    if (!response.ok) {
        throw new Error("Failed to fetch stats.");
    }

    return response.json();
};