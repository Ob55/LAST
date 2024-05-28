import React, { useState, useEffect } from 'react';

const ComparePage = () => {
  const [product, setProduct] = useState([]);
  const [selectedProduct1, setSelectedProduct1] = useState('');
  const [selectedProduct2, setSelectedProduct2] = useState('');

  useEffect(() => {
    // Mocking product data (replace with actual data fetching)
    const productData = [
      {
        "id": 1,
        "title": "Samsung Galaxy S22",
        "jumiaPrice": 89000,
        "amazonPrice": 95000,
        "ebayPrice": 92000,
        "description": "Samsung Galaxy S22 price in Jumia is KSH. 89,000. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty.",
        "brand": "Samsung",
        "image": "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS22-b.jpg"
      },
      {
        "id": 2,
        "title": "Vivo X80",
        "jumiaPrice": 65500,
        "amazonPrice": 68000,
        "ebayPrice": 67000,
        "description": "Vivo X80 price in Jumia is KSH. 65,500. Official dealers and warranty providers regulate the retail price of Vivo mobile products in official warranty.",
        "brand": "Vivo",
        "image": "https://www.whatmobile.com.pk/admin/images/Vivo/VivoX80-b.jpg"
      },
      {
        "id": 3,
        "title": "Samsung Galaxy A13",
        "jumiaPrice": 22000,
        "amazonPrice": 23000,
        "ebayPrice": 21500,
        "description": "Samsung Galaxy A13 price in Jumia is KSH. 22,000. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty.",
        "brand": "Samsung",
        "image": "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyA13-b.jpg"
      },
      {
        "id": 4,
        "title": "Xiaomi 12",
        "jumiaPrice": 179999,
        "amazonPrice": 185000,
        "ebayPrice": 178000,
        "description": "Xiaomi 12 price in Jumia is KSH. 179,999. Official dealers and warranty providers regulate the retail price of Xiaomi mobile products in official warranty.",
        "brand": "Xiaomi",
        "image": "https://www.whatmobile.com.pk/admin/images/Xiaomi/Xiaomi12-b.jpg"
      },
      {
        "id": 5,
        "title": "Huawei Nova 9",
        "jumiaPrice": 70000,
        "amazonPrice": 72000,
        "ebayPrice": 69500,
        "description": "Huawei Nova 9 price in Jumia is KSH. 70,000. Official dealers and warranty providers regulate the retail price of Huawei mobile products in official warranty.",
        "brand": "Huawei",
        "image": "https://www.whatmobile.com.pk/admin/images/Huawei/HuaweiNova9-b.jpg"
      },
      {
        "id": 6,
        "title": "Realme C35",
        "jumiaPrice": 32999,
        "amazonPrice": 34000,
        "ebayPrice": 32500,
        "description": "Realme C35 price in Jumia is KSH. 32,999. Official dealers and warranty providers regulate the retail price of Realme mobile products in official warranty.",
        "brand": "Realme",
        "image": "https://www.whatmobile.com.pk/admin/images/Realme/RealmeC35-b.jpg"
      },
      {
        "id": 7,
        "title": "Tecno Spark 8C 3GB",
        "jumiaPrice": 20499,
        "amazonPrice": 21000,
        "ebayPrice": 20200,
        "description": "Tecno Spark 8C 3GB price in Jumia is KSH. 20,499. Official dealers and warranty providers regulate the retail price of Tecno mobile products in official warranty.",
        "brand": "Tecno",
        "image": "https://www.whatmobile.com.pk/admin/images/Tecno/TecnoSpark8C3GB-b.jpg"
      },
      {
        "id": 8,
        "title": "itel Vision 3",
        "jumiaPrice": 16299,
        "amazonPrice": 17000,
        "ebayPrice": 16000,
        "description": "itel Vision 3 price in Jumia is KSH. 16,299. Official dealers and warranty providers regulate the retail price of itel mobile products in official warranty.",
        "brand": "Itel",
        "image": "https://www.whatmobile.com.pk/admin/images/itel/itelVision3-b.jpg"
      }
      // Add more product data as needed
    ];

    setProduct(productData);
  }, []);

  const handleSelect1Change = (event) => {
    setSelectedProduct1(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelectedProduct2(event.target.value);
  };

  return (
    <>
      <h1 className="display-5 my-5 text-center">Compare Page</h1>
      <div className="container">
        <div className="col-md-9 mx-auto">
          <table className="table table-bordered">
            <thead className="bg-light">
              <tr>
                <th>Select Product</th>
                <th width="300px">
                  <select className="form-control" value={selectedProduct1} onChange={handleSelect1Change}>
                    <option value="">Select item</option>
                    {product.map((item) => (
                      <option key={item.id} value={item.id}>{item.title}</option>
                    ))}
                  </select>
                </th>
                <th width="300px">
                  <select className="form-control" value={selectedProduct2} onChange={handleSelect2Change}>
                    <option value="">Select item </option>
                    {product.map((item) => (
                      <option key={item.id} value={item.id}>{item.title}</option>
                    ))}
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Product Image</th>
                <td><img src={product.find(item => item.id === parseInt(selectedProduct1))?.image} alt="" className="img-fluid" /></td>
                <td><img src={product.find(item => item.id === parseInt(selectedProduct2))?.image} alt="" className="img-fluid" /></td>
              </tr>
              <tr>
                <th>Kilimall</th>
                <td>{`KSH ${product.find(item => item.id === parseInt(selectedProduct1))?.jumiaPrice || 'N/A'}`}</td>
                <td>{`KSH ${product.find(item => item.id === parseInt(selectedProduct2))?.jumiaPrice || 'N/A'}`}</td>
              </tr>
              <tr>
                <th>Alibaba</th>
                <td>{`KSH ${product.find(item => item.id === parseInt(selectedProduct1))?.amazonPrice || 'N/A'}`}</td>
                <td>{`KSH ${product.find(item => item.id === parseInt(selectedProduct2))?.amazonPrice || 'N/A'}`}</td>
              </tr>
              <tr>
                <th>ShopIt</th>
                <td>{`KSH ${product.find(item => item.id === parseInt(selectedProduct1))?.ebayPrice || 'N/A'}`}</td>
                <td>{`KSH ${product.find(item => item.id === parseInt(selectedProduct2))?.ebayPrice || 'N/A'}`}</td>
              </tr>
              <tr>
                <th>Product Description</th>
                <td>{product.find(item => item.id === parseInt(selectedProduct1))?.description || 'N/A'}</td>
                <td>{product.find(item => item.id === parseInt(selectedProduct2))?.description || 'N/A'}</td>
              </tr>
              <tr>
                <th>Product Brand</th>
                <td>{product.find(item => item.id === parseInt(selectedProduct1))?.brand || 'N/A'}</td>
                <td>{product.find(item => item.id === parseInt(selectedProduct2))?.brand || 'N/A'}</td>
              </tr>
              <tr>
  <th>Visit as</th>
  <td>
    <button className="btn btn-primary" onClick={() => window.open('https://www.alibaba.com/', '_blank')}>
      Alibaba
    </button>
    <button className="btn btn-primary" onClick={() => window.open('https://www.shopit.co.ke/', '_blank')}>
      Shopit
    </button> 
  </td>
</tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ComparePage;
