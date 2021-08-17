import React, { useCallback, useEffect, useMemo, useState } from 'react';

import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState("");
  const [nonDicomImg, setNonDicomImg] = useState(false);

  const params = useMemo(() => {
    const p = []; p["kioskMode"] = true;
    return p;
  }, [])

  useEffect(() => {
    window.papaya.Container.startPapaya();
    window.papaya.Container.resetViewer(0, params);
  }, [params]);

  const updateImage = useCallback((_event) => {
    _event.preventDefault();

    if (selectedFile.type.startsWith("image")) {
      setNonDicomImg(true);
    } else {
      setNonDicomImg(false);
    }

    try {
      params["images"] = [URL.createObjectURL(selectedFile)];
      window.papaya.Container.resetViewer(0, params);
    } catch (error) {
      console.error(error)
    }
  }, [params, selectedFile]);

  const selectFile = useCallback(
    (e) => setSelectedFile(e.target.files[0]), []
  );

  return (
    <div>
      <div style={{ "width": "800px", "marginTop": "10px" }}>
        <div id="papaya_viewer" class="papaya" hidden={nonDicomImg}></div>
        {!!selectedFile && !!nonDicomImg && <img
          alt="Medical file preview"
          src={URL.createObjectURL(selectedFile)}
          style={{width: "800px", height: "600px", objectFit: "contain" }}/>}
        <br />

        <form style={{ margin: "10px" }}
          onSubmit={updateImage}>
          <label style={{ fontFamily: "monospace" }}>
            <h3>Upload file:</h3>
            <input
              required
              type="file"
              onChange={selectFile} />
          </label>
          <br />
          <button type="submit" style={{ "marginTop": "10px" }}>
            Visualize image
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
