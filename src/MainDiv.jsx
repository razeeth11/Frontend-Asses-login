import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function MainDiv() {
  const [flexVisible, setFlexVisible] = useState(true);
  const [treeList, setTreeList] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [images, setImages] = useState([
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000",
    "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg",
    "https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/2023/10/free-images.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
    "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg",
    "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
  ]);

  useEffect(() => {
    fetch("https://653015676c756603295e3aa6.mockapi.io/treefacts")
      .then((res) => res.json())
      .then((data) => setTreeList(data));
  }, []);

  return (
    <>
      <div className="nav-but-div">
        <button onClick={() => setFlexVisible(true)} className="nav-button">
          Flex Images
        </button>
        <button onClick={() => setFlexVisible(false)} className="nav-button">
          Data Table
        </button>
        <button title="Log Out" onClick={logout} className="nav-button logout">
          <span class="material-symbols-outlined">logout </span>
        </button>
      </div>
      {flexVisible ? (
        <div className="main-div">
          {images.map((item, index) => (
            <div className="image-div">
              <img key={index} src={item} />
              <div className="image-div-content">
                <p className="image-div-title">Image - {index + 1}</p>
                <p className="image-div-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, iure.
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Tree</th>
                <th>Benefits</th>
                <th>Season</th>
                <th>Place</th>
              </tr>
            </thead>
            <tbody>
              {treeList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.tree}</td>
                  <td>{item.benefits}</td>
                  <td>{item.season}</td>
                  <td>{item.native_place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
