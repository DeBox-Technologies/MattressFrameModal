(function() {
  // Inject CSS
  var css = `
    .button-style {
      background-color: #3f3f46;
      padding: 8px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      border-radius: 9999px;
      z-index: 50;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      cursor: pointer;
    }
    .button-style:hover {
      background-color: #37373d;
      transform: scale(1.05);
    }
    .modal-background {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 50;
    }
    .modal-container {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      background-color: #18181b;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      max-width: 90%;
      width: 380px;
      height: 95%;
      max-height: 900px;
    }
    .modal-header {
      position: absolute;
      top: -1%;
      right: -1%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 14px;
    }
    .modal-close-button {
    background-color: #ef4444;
    color: white;
    border-radius: 9999px;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
  .modal-close-button:hover {
    background-color: #a22020;
  }
  `;
  var style = document.createElement('style');
  if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);

  var userConfig = window.myChatbotConfig || {};
  var iframeSrc = userConfig.src || "https://dashboard.themattressai.com/QRchat/OkHkFvjcqccNfikX2m8EfnPEfjJ3";

  var html = `
    <button onclick="openModal()" class="button-style">
    <img
      src="https://res.cloudinary.com/djr22sgp3/image/upload/v1689685357/mattress_ai_logo_circle_2_aw3f3q.png"
      width="40"
      alt="Open Modal"
    />
  </button>

  <div id="modal" class="modal-background" style="display: none; width: 100%; height: 100%;" onclick="closeModal(event)">
    <div class="modal-container" onclick="event.stopPropagation()">
      <div class="modal-header">
        <button onclick="closeModal(event)" class="modal-close-button">
          &#10005;
        </button>
      </div>
      <iframe src="${iframeSrc}" style="border-radius: 8px; width: 100%; height: 100%; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"></iframe>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);

  // JavaScript functions
  window.openModal = function() {
    document.getElementById('modal').style.display = 'block';
  };

  window.closeModal = function(event) {
    event.stopPropagation();
    document.getElementById('modal').style.display = 'none';
  };
})();
