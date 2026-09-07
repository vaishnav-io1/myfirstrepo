import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAPI:
    """VM Consultancy API tests"""

    def test_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert "VM Consultancy" in r.json().get("message", "")

    def test_post_contact(self):
        payload = {"name": "TEST_User", "phone": "1234561089", "message": "TEST_Hello"}
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "TEST_User"
        assert data["phone"] == "1234561089"
        assert data["message"] == "TEST_Hello"
        assert "id" in data
        assert "timestamp" in data

    def test_get_contacts(self):
        r = requests.get(f"{BASE_URL}/api/contacts")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        # At least the one we created above should be present
        assert len(data) >= 1

    def test_contact_missing_fields(self):
        r = requests.post(f"{BASE_URL}/api/contact", json={"name": "Only Name"})
        assert r.status_code == 422

    def test_contact_no_mongodb_id(self):
        """Ensure _id is not returned"""
        r = requests.get(f"{BASE_URL}/api/contacts")
        data = r.json()
        if data:
            assert "_id" not in data[0]
