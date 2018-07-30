export default `
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 #0a6c8f;
      box-shadow: 0 0 0 0 #0a6c8f;
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
  }
  .body {
    padding: 0;
    margin: 0;
  }
  .as-action-hint {
    animation: pulse 2s infinite;
  }
  .Popover {
    z-index: 22;
  }
  .Popover-body {
    display: inline-flex;
    flex-direction: column;
    padding: 2rem 4rem;
    background: hsl(0, 0%, 27%);
    color: white;
    border-radius: 0.3rem;
  }
  
  .Popover-tipShape {
    fill: hsl(0, 0%, 27%);
  }
  .Target {
    -webkit-user-select: none;
    position: relative;
    display: inline-block;
    color: hsla(0, 0%, 0%, 0.45);
    color: white;
    white-space: pre-wrap;
    text-align: center;
    text-transform: uppercase;
    border-radius: 0.2rem;
    overflow: hidden;
  }
  
  .Target-Move {
    padding: 1rem;
    cursor: move;
    border-bottom: 1px solid white;
    background: hsl(173, 69%, 48%);
  }
  
  .Target-Toggle {
    display: block;
    padding: 1rem;
    cursor: pointer;
    background: hsl(346, 62%, 55%);
  }
  .Target.is-open .Target-Toggle {
    background: hsl(346, 80%, 50%);
  }
`;