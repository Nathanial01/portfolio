import React, { useState } from 'react';
import './BlockchainManager.css'; // Separate CSS file for styling
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaGitAlt, FaRust, FaNodeJs, FaReact, FaLaravel , FaDownload} from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si';


const BlockchainManager = () => {
  const [sender, setSender] = useState('0000c69e8e33bee4e36d5bb96d1b37473644094e153f6cbe3ddd74ad8b1dc8a1');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);
  const [rewardAddress, setRewardAddress] = useState('0000c69e8e33bee4e36d5bb96d1b37473644094e153f6cbe3ddd74ad8b1dc8a1');
  const [blocks, setBlocks] = useState('');

  const createTransaction = async () => {
    try {
      const response = await fetch('http://localhost:8000/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender, recipient, amount: parseFloat(amount) }),
      });

      if (!response.ok) {
        throw new Error('Transaction creation failed');
      }

      alert(await response.text());
      setRecipient('');
      setAmount(0);
    } catch (error) {
      alert(error.message);
    }
  };

  const mine = async () => {
    try {
      const response = await fetch('http://localhost:8000/mine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reward_address: rewardAddress }),
      });

      if (!response.ok) {
        throw new Error('Mining failed');
      }

      alert(await response.text());
    } catch (error) {
      alert(error.message);
    }
  };

  const getBlocks = async () => {
    try {
      const response = await fetch('http://localhost:8000/blocks');
      if (!response.ok) {
        throw new Error('Failed to fetch blocks');
      }

      const data = await response.json();
      setBlocks(JSON.stringify(data, null, 2));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
     

      <div className="container">  <div class="update-item">
        <h1 className="my-4">CyroX Chain</h1>

        <div className="Bcard mb-4">
       
          <div className="card-body">
            <h2 className="card-title">Create Transaction</h2>
            <div className="form-group">
              <input
                type="text"
                id="sender"
                className="form-control mb-2"
                placeholder="Sender"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
              />
              <input
                type="text"
                id="recipient"
                className="form-control mb-2"
                placeholder="Recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
              <input
                type="number"
                id="amount"
                className="form-control mb-2"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={createTransaction} className="btn btn-primary">Create Transaction</button>
            </div>
          </div>
          
        </div>
      

        <div className="Bcard mb-4">
          <div className="card-body">
            <h2 className="card-title">Mine</h2>
            <div className="form-group">
              <input
                type="text"
                id="reward_address"
                className="form-control mb-2"
                placeholder="Reward Address"
                value={rewardAddress}
                onChange={(e) => setRewardAddress(e.target.value)}
              />
              <button onClick={mine} className="btn btn-primary">Mine</button>
            </div>
          </div>
        </div>

    <div class="hidden-message">"Momenteel bezig met de configuratie<br/> <FaRust /> van Rust server DNS <a href=".../public\blockchain.rs" download>< FaDownload/></a>
    </div>
  </div>
        <div className="BTcard">
          <div className="card-body">
            <h2 className="card-title">Blocks</h2>
            <button onClick={getBlocks} className="btn btn-primary mb-3">Get Blocks</button>
            <pre id="blocks">{blocks}</pre>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default BlockchainManager;