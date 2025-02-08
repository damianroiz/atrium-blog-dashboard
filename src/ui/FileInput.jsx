import styled from 'styled-components';

const FileInput = styled.input.attrs({ type: 'file' })`
  font-size: var(--fs-12);
  border-radius: var(--border-radius-sm);
  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    background-color: var(--c-blue-700);
    color: var(--c-blue-50);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    &:hover {
      background-color: var(--c-blue-600);
    }
  }
`;

export default FileInput;
