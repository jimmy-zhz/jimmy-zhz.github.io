---
title: AI & Data Engineering Roadmap
description: Senior Backend → AI/Data Stack 学习路线图
---

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

<div class="landing-root">

<div class="progress-bar" id="progressBar"></div>

<!-- HEADER -->
<header>
  <div class="logo">AI.ROADMAP_2025</div>
  <nav>
    <a href="#phase-1">Foundations</a>
    <a href="#phase-8">Data Eng</a>
    <a href="#phase-6">RAG</a>
    <a href="#phase-7">Agents</a>
    <a href="#phase-10">MLOps</a>
    <a href="#targets">Careers</a>
  </nav>
  <div class="header-actions">
    <a class="cta-knowledge-base" href="/home">
      <span class="icon">📚</span> 进入知识库首页
    </a>
  </div>
</header>

<!-- HERO -->
<section class="hero">
  <div class="hero-eyebrow">Senior Backend → AI/Data Stack</div>
  <h1>
    <span class="accent">AI &amp; Data</span><br />
    Engineering<br />
    <span class="gold">Roadmap</span>
  </h1>
  <p class="hero-sub">
    Based on 10 years Java backend · Targeting Senior Data Engineer, AI Engineer, ML Platform roles in Canada.
    Items marked <strong style="color:#FF8FA3">🔴 Core</strong> are highest priority given your background.
  </p>

  <div class="legend">
    <div class="legend-item"><span class="dot dot-core"></span> Core — Must Master</div>
    <div class="legend-item"><span class="dot dot-key"></span> Key — Important</div>
    <div class="legend-item"><span class="dot dot-nice"></span> Nice — Good to Know</div>
    <div class="legend-item" style="color: var(--landing-blue-dim);">
      <span style="font-size:11px;text-decoration:line-through;color:var(--landing-blue-dim)">Tag</span> Already Have
    </div>
  </div>

  <div class="hero-stats">
    <div class="stat">
      <span class="stat-num">10</span>
      <span class="stat-label">Sections</span>
    </div>
    <div class="stat">
      <span class="stat-num">60+</span>
      <span class="stat-label">Topics</span>
    </div>
    <div class="stat">
      <span class="stat-num">4</span>
      <span class="stat-label">Certifications</span>
    </div>
    <div class="stat">
      <span class="stat-num">3</span>
      <span class="stat-label">Career Paths</span>
    </div>
  </div>
</section>

<!-- PHASES -->
<div class="phases">

  <!-- PHASE 1: Essential Basics -->
  <div class="phase phase-1" id="phase-1">
    <div class="phase-header">
      <span class="phase-num">01</span>
      <span class="phase-title"><span class="phase-icon">⚙️</span> Essential Basics</span>
      <span class="phase-badge badge-foundation">Foundation</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">Skip or skim — 大部分已有</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/linux.html">
        <div class="card-title"><span class="icon">🐧</span> Linux</div>
        <div class="tag-list">
          <span class="tag tag-have">Shell Scripting</span>
          <span class="tag tag-have">File System</span>
          <span class="tag tag-key">Cron Jobs</span>
          <span class="tag tag-key">systemd</span>
          <span class="tag tag-nice">Network Tools</span>
        </div>
        <div class="card-note">已有基础，补强 systemd + cgroup 即可</div>
      </a>
      <a class="card" href="./topics/git.html">
        <div class="card-title"><span class="icon">🔀</span> Git</div>
        <div class="tag-list">
          <span class="tag tag-have">Branch / Merge</span>
          <span class="tag tag-have">Rebase</span>
          <span class="tag tag-key">Git Flow</span>
          <span class="tag tag-nice">Hooks</span>
        </div>
        <div class="card-note">✅ 已掌握，无需额外投入</div>
      </a>
      <a class="card" href="./topics/python.html">
        <div class="card-title"><span class="icon">🐍</span> Python</div>
        <div class="tag-list">
          <span class="tag tag-core">Pandas</span>
          <span class="tag tag-core">Async / Await</span>
          <span class="tag tag-key">Type Hints</span>
          <span class="tag tag-key">Pydantic</span>
          <span class="tag tag-nice">Poetry / uv</span>
        </div>
        <div class="card-note">重点补 async 模式 + data wrangling</div>
      </a>
      <a class="card" href="./topics/sql.html">
        <div class="card-title"><span class="icon">🗄️</span> SQL</div>
        <div class="tag-list">
          <span class="tag tag-have">Joins / Subquery</span>
          <span class="tag tag-core">Window Functions</span>
          <span class="tag tag-core">CTE</span>
          <span class="tag tag-key">Query Optimization</span>
        </div>
        <div class="card-note">Window Functions 是数据工程必考点</div>
      </a>
      <a class="card" href="./topics/docker.html">
        <div class="card-title"><span class="icon">🐳</span> Docker</div>
        <div class="tag-list">
          <span class="tag tag-have">Dockerfile</span>
          <span class="tag tag-have">Compose</span>
          <span class="tag tag-core">Multi-stage Build</span>
          <span class="tag tag-key">Networking</span>
        </div>
        <div class="card-note">✅ Oracle Cloud 项目已实战</div>
      </a>
      <a class="card" href="./topics/networking.html">
        <div class="card-title"><span class="icon">🌐</span> Networking</div>
        <div class="tag-list">
          <span class="tag tag-have">TCP/IP</span>
          <span class="tag tag-key">DNS / TLS</span>
          <span class="tag tag-key">Nginx Reverse Proxy</span>
          <span class="tag tag-nice">gRPC</span>
        </div>
        <div class="card-note">Cloudflare + Nginx 已有实战经验</div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#00CFFF" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 2: Machine Learning -->
  <div class="phase phase-2" id="phase-2">
    <div class="phase-header">
      <span class="phase-num">02</span>
      <span class="phase-title"><span class="phase-icon">📊</span> Machine Learning</span>
      <span class="phase-badge badge-core">Core Concepts</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">概念理解为主，非算法工程师</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/regression.html">
        <div class="card-title"><span class="icon">📈</span> Regression</div>
        <div class="tag-list">
          <span class="tag tag-core">Linear / Logistic</span>
          <span class="tag tag-key">Ridge / Lasso</span>
          <span class="tag tag-nice">Gradient Boost</span>
        </div>
        <div class="card-note">BigQuery ML 作业已涉及 fare 预测</div>
      </a>
      <a class="card" href="./topics/classification.html">
        <div class="card-title"><span class="icon">🏷️</span> Classification</div>
        <div class="tag-list">
          <span class="tag tag-key">Decision Tree</span>
          <span class="tag tag-key">Random Forest</span>
          <span class="tag tag-nice">XGBoost</span>
        </div>
      </a>
      <a class="card" href="./topics/clustering.html">
        <div class="card-title"><span class="icon">🔵</span> Clustering</div>
        <div class="tag-list">
          <span class="tag tag-key">K-Means</span>
          <span class="tag tag-nice">DBSCAN</span>
        </div>
      </a>
      <a class="card" href="./topics/evaluation.html">
        <div class="card-title"><span class="icon">🎯</span> Evaluation</div>
        <div class="tag-list">
          <span class="tag tag-core">Precision / Recall</span>
          <span class="tag tag-core">F1 / AUC-ROC</span>
          <span class="tag tag-key">Cross Validation</span>
          <span class="tag tag-key">Overfitting</span>
        </div>
        <div class="card-note">面试高频，必须能解释 trade-offs</div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#00E5A0" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 3: Deep Learning -->
  <div class="phase phase-3" id="phase-3">
    <div class="phase-header">
      <span class="phase-num">03</span>
      <span class="phase-title"><span class="phase-icon">🧠</span> Deep Learning</span>
      <span class="phase-badge badge-advanced">Advanced</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">重点 Transformer，其余概念理解</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/neural-network.html">
        <div class="card-title"><span class="icon">🔗</span> Neural Network</div>
        <div class="tag-list">
          <span class="tag tag-core">Backprop</span>
          <span class="tag tag-core">Activation Funcs</span>
          <span class="tag tag-key">Batch Norm</span>
          <span class="tag tag-key">Dropout</span>
        </div>
      </a>
      <a class="card" href="./topics/cnn.html">
        <div class="card-title"><span class="icon">🖼️</span> CNN</div>
        <div class="tag-list">
          <span class="tag tag-nice">Conv Layers</span>
          <span class="tag tag-nice">Pooling</span>
          <span class="tag tag-nice">ResNet</span>
        </div>
        <div class="card-note">了解即可，非图像方向</div>
      </a>
      <a class="card" href="./topics/attention.html">
        <div class="card-title"><span class="icon">✨</span> Attention Mechanism</div>
        <div class="tag-list">
          <span class="tag tag-core">Self-Attention</span>
          <span class="tag tag-core">Multi-Head Attention</span>
          <span class="tag tag-core">Positional Encoding</span>
          <span class="tag tag-key">KV Cache</span>
        </div>
        <div class="card-note">🔑 LLM 的核心基础，重点掌握</div>
      </a>
      <a class="card" href="./topics/rnn-lstm.html">
        <div class="card-title"><span class="icon">🔄</span> RNN / LSTM</div>
        <div class="tag-list">
          <span class="tag tag-key">Vanishing Gradient</span>
          <span class="tag tag-nice">GRU</span>
        </div>
        <div class="card-note">了解原理，Transformer 已取代</div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#A78BFA" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 4: LLM -->
  <div class="phase phase-4" id="phase-4">
    <div class="phase-header">
      <span class="phase-num">04</span>
      <span class="phase-title"><span class="phase-icon">🤖</span> LLM</span>
      <span class="phase-badge badge-applied">High Priority</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">AI 岗核心竞争力</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/transformer.html">
        <div class="card-title"><span class="icon">⚡</span> Transformer</div>
        <div class="tag-list">
          <span class="tag tag-core">Encoder-Decoder</span>
          <span class="tag tag-core">Scaled Dot Product</span>
          <span class="tag tag-core">FFN Layer</span>
          <span class="tag tag-key">Layer Norm</span>
        </div>
        <div class="card-note">现代 LLM 架构基础，必须深入理解</div>
      </a>
      <a class="card" href="./topics/gpt-bert.html">
        <div class="card-title"><span class="icon">🧩</span> GPT / BERT</div>
        <div class="tag-list">
          <span class="tag tag-core">Autoregressive</span>
          <span class="tag tag-core">Bidirectional</span>
          <span class="tag tag-key">RLHF</span>
          <span class="tag tag-nice">Instruction Tuning</span>
        </div>
      </a>
      <a class="card" href="./topics/embedding.html">
        <div class="card-title"><span class="icon">🧮</span> Embedding</div>
        <div class="tag-list">
          <span class="tag tag-core">Dense Vectors</span>
          <span class="tag tag-core">Semantic Similarity</span>
          <span class="tag tag-key">OpenAI / Cohere</span>
          <span class="tag tag-key">Dimensionality</span>
        </div>
        <div class="card-note">RAG 系统的核心，必须精通</div>
      </a>
      <a class="card" href="./topics/tokenization.html">
        <div class="card-title"><span class="icon">✂️</span> Tokenization</div>
        <div class="tag-list">
          <span class="tag tag-key">BPE</span>
          <span class="tag tag-key">SentencePiece</span>
          <span class="tag tag-key">Token Limits</span>
          <span class="tag tag-nice">tiktoken</span>
        </div>
      </a>
      <a class="card" href="./topics/fine-tuning.html">
        <div class="card-title"><span class="icon">🎛️</span> Fine Tuning</div>
        <div class="tag-list">
          <span class="tag tag-core">SFT</span>
          <span class="tag tag-core">LoRA / QLoRA</span>
          <span class="tag tag-key">PEFT</span>
          <span class="tag tag-key">Data Format</span>
          <span class="tag tag-nice">DPO</span>
        </div>
        <div class="card-note">AI 平台岗位必备，Hugging Face 生态</div>
      </a>
      <a class="card" href="./topics/quantization.html">
        <div class="card-title"><span class="icon">📦</span> Quantization</div>
        <div class="tag-list">
          <span class="tag tag-key">INT8 / INT4</span>
          <span class="tag tag-key">GGUF / GGML</span>
          <span class="tag tag-nice">AWQ / GPTQ</span>
          <span class="tag tag-nice">Ollama</span>
        </div>
        <div class="card-note">本地部署 LLM 必知</div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#F0A500" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 5: NLP -->
  <div class="phase phase-5" id="phase-5">
    <div class="phase-header">
      <span class="phase-num">05</span>
      <span class="phase-title"><span class="phase-icon">📝</span> NLP</span>
      <span class="phase-badge badge-core">Applied</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">应用场景理解，非核心专攻</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/text-classification.html">
        <div class="card-title"><span class="icon">🏷️</span> Text Classification</div>
        <div class="tag-list">
          <span class="tag tag-key">Zero-shot</span>
          <span class="tag tag-key">Few-shot</span>
          <span class="tag tag-nice">BERT Fine-tune</span>
        </div>
      </a>
      <a class="card" href="./topics/ner.html">
        <div class="card-title"><span class="icon">🔍</span> NER</div>
        <div class="tag-list">
          <span class="tag tag-key">spaCy</span>
          <span class="tag tag-key">Structured Output</span>
          <span class="tag tag-nice">IOB Tagging</span>
        </div>
      </a>
      <a class="card" href="./topics/summarization.html">
        <div class="card-title"><span class="icon">📋</span> Summarization</div>
        <div class="tag-list">
          <span class="tag tag-core">Prompt Engineering</span>
          <span class="tag tag-key">Map-Reduce</span>
          <span class="tag tag-key">Evaluation ROUGE</span>
        </div>
      </a>
      <a class="card" href="./topics/sentiment.html">
        <div class="card-title"><span class="icon">💬</span> Sentiment Analysis</div>
        <div class="tag-list">
          <span class="tag tag-nice">VADER</span>
          <span class="tag tag-key">LLM-based</span>
        </div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#FF5F7E" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 6: RAG -->
  <div class="phase phase-6" id="phase-6">
    <div class="phase-header">
      <span class="phase-num">06</span>
      <span class="phase-title"><span class="phase-icon">🔎</span> RAG</span>
      <span class="phase-badge badge-applied">High Priority</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">AI 工程核心，重点投入</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/chunking.html">
        <div class="card-title"><span class="icon">✂️</span> Chunking Strategies</div>
        <div class="tag-list">
          <span class="tag tag-core">Fixed Size</span>
          <span class="tag tag-core">Semantic Chunking</span>
          <span class="tag tag-key">Recursive Split</span>
          <span class="tag tag-key">Overlap</span>
        </div>
        <div class="card-note">Retrieval 质量的第一关卡</div>
      </a>
      <a class="card" href="./topics/vector-db.html">
        <div class="card-title"><span class="icon">🗃️</span> Vector Database</div>
        <div class="tag-list">
          <span class="tag tag-core">Qdrant</span>
          <span class="tag tag-key">Pinecone</span>
          <span class="tag tag-key">Milvus</span>
          <span class="tag tag-key">pgvector</span>
          <span class="tag tag-nice">Weaviate</span>
        </div>
        <div class="card-note">Qdrant 自部署优先，和 Docker 技能结合</div>
      </a>
      <a class="card" href="./topics/hybrid-search.html">
        <div class="card-title"><span class="icon">🔀</span> Hybrid Search</div>
        <div class="tag-list">
          <span class="tag tag-core">Dense + Sparse</span>
          <span class="tag tag-core">BM25</span>
          <span class="tag tag-key">Reciprocal Rank Fusion</span>
        </div>
      </a>
      <a class="card" href="./topics/reranking.html">
        <div class="card-title"><span class="icon">🎚️</span> Reranking</div>
        <div class="tag-list">
          <span class="tag tag-core">Cross-encoder</span>
          <span class="tag tag-key">Cohere Rerank</span>
          <span class="tag tag-nice">ColBERT</span>
        </div>
      </a>
      <a class="card" href="./topics/rag-eval.html">
        <div class="card-title"><span class="icon">📏</span> RAG Evaluation</div>
        <div class="tag-list">
          <span class="tag tag-core">RAGAS</span>
          <span class="tag tag-key">Faithfulness</span>
          <span class="tag tag-key">Answer Relevancy</span>
          <span class="tag tag-nice">DeepEval</span>
        </div>
        <div class="card-note">构建可信 AI pipeline 的关键</div>
      </a>
      <a class="card" href="./topics/graphrag.html">
        <div class="card-title"><span class="icon">🕸️</span> GraphRAG</div>
        <div class="tag-list">
          <span class="tag tag-key">Knowledge Graph</span>
          <span class="tag tag-key">Entity Extraction</span>
          <span class="tag tag-nice">Neo4j</span>
          <span class="tag tag-nice">MS GraphRAG</span>
        </div>
        <div class="card-note">高级话题，AI Architect 差异化优势</div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#00CFFF" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 7: AI Agents -->
  <div class="phase phase-7" id="phase-7">
    <div class="phase-header">
      <span class="phase-num">07</span>
      <span class="phase-title"><span class="phase-icon">🤖</span> AI Agents</span>
      <span class="phase-badge badge-applied">Trending</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">2025 热门岗位核心技能</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/mcp.html">
        <div class="card-title"><span class="icon">🔌</span> MCP</div>
        <div class="tag-list">
          <span class="tag tag-core">Protocol Spec</span>
          <span class="tag tag-core">Tool Definition</span>
          <span class="tag tag-core">Resource / Prompt</span>
          <span class="tag tag-key">Claude MCP</span>
        </div>
        <div class="card-note">✅ 已在用！可作为亮点经验</div>
      </a>
      <a class="card" href="./topics/function-calling.html">
        <div class="card-title"><span class="icon">🔧</span> Function Calling</div>
        <div class="tag-list">
          <span class="tag tag-core">Tool Schema JSON</span>
          <span class="tag tag-core">Parallel Calls</span>
          <span class="tag tag-key">Error Handling</span>
          <span class="tag tag-key">Streaming</span>
        </div>
      </a>
      <a class="card" href="./topics/langchain.html">
        <div class="card-title"><span class="icon">⛓️</span> LangChain</div>
        <div class="tag-list">
          <span class="tag tag-core">LCEL</span>
          <span class="tag tag-core">Chains</span>
          <span class="tag tag-key">Memory</span>
          <span class="tag tag-key">Document Loaders</span>
        </div>
        <div class="card-note">行业标准框架，面试必问</div>
      </a>
      <a class="card" href="./topics/langgraph.html">
        <div class="card-title"><span class="icon">🕸️</span> LangGraph</div>
        <div class="tag-list">
          <span class="tag tag-core">State Graph</span>
          <span class="tag tag-core">Conditional Edges</span>
          <span class="tag tag-key">Human-in-Loop</span>
          <span class="tag tag-key">Persistence</span>
        </div>
        <div class="card-note">Multi-agent 编排首选，快速崛起</div>
      </a>
      <a class="card" href="./topics/crewai.html">
        <div class="card-title"><span class="icon">👥</span> CrewAI</div>
        <div class="tag-list">
          <span class="tag tag-key">Role-based Agents</span>
          <span class="tag tag-key">Task Delegation</span>
          <span class="tag tag-nice">Crew + Flow</span>
        </div>
      </a>
      <a class="card" href="./topics/multi-agent.html">
        <div class="card-title"><span class="icon">🌐</span> Multi-Agent Systems</div>
        <div class="tag-list">
          <span class="tag tag-key">Supervisor Pattern</span>
          <span class="tag tag-key">Agent Communication</span>
          <span class="tag tag-nice">AutoGen</span>
          <span class="tag tag-nice">A2A Protocol</span>
        </div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#00E5A0" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 8: Data Engineering -->
  <div class="phase phase-8" id="phase-8">
    <div class="phase-header">
      <span class="phase-num">08</span>
      <span class="phase-title"><span class="phase-icon">🏗️</span> Data Engineering</span>
      <span class="phase-badge badge-applied">Your Stronghold</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">主战场，深度展开</span>
    </div>
    <div class="card-grid">
      <a class="card card-wide" href="./topics/data-modeling.html">
        <div class="card-title"><span class="icon">🗺️</span> Data Modeling</div>
        <div class="tag-list">
          <span class="tag tag-have">OLTP vs OLAP</span>
          <span class="tag tag-core">Star Schema</span>
          <span class="tag tag-core">Fact / Dim Tables</span>
          <span class="tag tag-core">SCD Type 1/2/3</span>
          <span class="tag tag-key">Data Vault 2.0</span>
          <span class="tag tag-nice">Snowflake Schema</span>
        </div>
        <div class="card-note">SCD 是面试 DW 岗位必考题，NYC UOIP 已有实战设计经验</div>
      </a>
      <a class="card" href="./topics/bigquery.html">
        <div class="card-title"><span class="icon">☁️</span> BigQuery</div>
        <div class="tag-list">
          <span class="tag tag-have">External Tables</span>
          <span class="tag tag-have">BigQuery ML</span>
          <span class="tag tag-core">Partitioning</span>
          <span class="tag tag-core">Clustering</span>
          <span class="tag tag-key">Cost Optimization</span>
        </div>
        <div class="card-note">✅ NYC UOIP 核心，NYC 311 + NYPD 数据</div>
      </a>
      <a class="card" href="./topics/snowflake.html">
        <div class="card-title"><span class="icon">❄️</span> Snowflake</div>
        <div class="tag-list">
          <span class="tag tag-have">Databases / Schemas</span>
          <span class="tag tag-have">Streamlit-in-Snowflake</span>
          <span class="tag tag-core">Virtual Warehouses</span>
          <span class="tag tag-key">Data Sharing</span>
        </div>
        <div class="card-note">✅ DIT54104 课程已实战</div>
      </a>
      <a class="card" href="./topics/spark.html">
        <div class="card-title"><span class="icon">⚡</span> Apache Spark</div>
        <div class="tag-list">
          <span class="tag tag-have">RDD / DataFrame</span>
          <span class="tag tag-core">Spark SQL</span>
          <span class="tag tag-core">Structured Streaming</span>
          <span class="tag tag-key">Catalyst Optimizer</span>
          <span class="tag tag-key">AQE</span>
        </div>
        <div class="card-note">大数据必备，Databricks 考证核心</div>
      </a>
      <a class="card" href="./topics/kafka.html">
        <div class="card-title"><span class="icon">📨</span> Kafka</div>
        <div class="tag-list">
          <span class="tag tag-have">Producer / Consumer</span>
          <span class="tag tag-have">Topic / Partition</span>
          <span class="tag tag-core">Exactly-Once</span>
          <span class="tag tag-core">Schema Registry</span>
          <span class="tag tag-key">Kafka Streams</span>
        </div>
        <div class="card-note">✅ 工作经验，补强高级特性</div>
      </a>
      <a class="card" href="./topics/airflow.html">
        <div class="card-title"><span class="icon">🌪️</span> Airflow</div>
        <div class="tag-list">
          <span class="tag tag-have">DAG Basics</span>
          <span class="tag tag-core">TaskFlow API</span>
          <span class="tag tag-core">Dynamic DAGs</span>
          <span class="tag tag-key">Sensor / Hook</span>
          <span class="tag tag-key">Astronomer</span>
        </div>
        <div class="card-note">✅ Olist 项目已实战，补 TaskFlow 模式</div>
      </a>
      <a class="card" href="./topics/iceberg.html">
        <div class="card-title"><span class="icon">🧊</span> Apache Iceberg</div>
        <div class="tag-list">
          <span class="tag tag-core">Table Format Spec</span>
          <span class="tag tag-core">Time Travel</span>
          <span class="tag tag-core">Schema Evolution</span>
          <span class="tag tag-key">Merge-on-Read</span>
          <span class="tag tag-key">Copy-on-Write</span>
        </div>
        <div class="card-note">✅ Oracle Server Trino + Hive 栈已部署</div>
      </a>
      <a class="card" href="./topics/delta-lake.html">
        <div class="card-title"><span class="icon">Δ</span> Delta Lake</div>
        <div class="tag-list">
          <span class="tag tag-core">ACID Transactions</span>
          <span class="tag tag-core">Delta Log</span>
          <span class="tag tag-key">OPTIMIZE / ZORDER</span>
          <span class="tag tag-key">DML Support</span>
        </div>
        <div class="card-note">Databricks 认证必考</div>
      </a>
      <a class="card" href="./topics/dbt.html">
        <div class="card-title"><span class="icon">🔄</span> dbt</div>
        <div class="tag-list">
          <span class="tag tag-core">Models / Sources</span>
          <span class="tag tag-core">Tests / Docs</span>
          <span class="tag tag-key">Macros / Jinja</span>
          <span class="tag tag-key">Incremental</span>
          <span class="tag tag-nice">dbt Cloud</span>
        </div>
        <div class="card-note">现代数据栈标配，加分项</div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#F0A500" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 9: Cloud -->
  <div class="phase phase-9" id="phase-9">
    <div class="phase-header">
      <span class="phase-num">09</span>
      <span class="phase-title"><span class="phase-icon">☁️</span> Cloud Computing</span>
      <span class="phase-badge badge-applied">Certification Target</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">AWS → GCP → Azure 顺序</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/aws.html">
        <div class="card-title"><span class="icon">🟠</span> AWS</div>
        <div class="tag-list">
          <span class="tag tag-core">S3 + Glue</span>
          <span class="tag tag-core">Redshift</span>
          <span class="tag tag-core">Lambda</span>
          <span class="tag tag-key">EMR</span>
          <span class="tag tag-key">SageMaker</span>
          <span class="tag tag-nice">Step Functions</span>
        </div>
        <div class="card-note">SAA 先考，Data Engineer Associate 接续</div>
      </a>
      <a class="card" href="./topics/gcp.html">
        <div class="card-title"><span class="icon">🔵</span> GCP</div>
        <div class="tag-list">
          <span class="tag tag-have">BigQuery</span>
          <span class="tag tag-have">GCS</span>
          <span class="tag tag-core">Vertex AI</span>
          <span class="tag tag-key">Dataflow</span>
          <span class="tag tag-key">Pub/Sub</span>
        </div>
        <div class="card-note">✅ NYC UOIP 项目 pace-lab-bdp 已在用</div>
      </a>
      <a class="card" href="./topics/azure.html">
        <div class="card-title"><span class="icon">🔷</span> Azure</div>
        <div class="tag-list">
          <span class="tag tag-key">Data Factory</span>
          <span class="tag tag-key">Synapse Analytics</span>
          <span class="tag tag-nice">Azure ML</span>
          <span class="tag tag-nice">ADLS Gen2</span>
        </div>
        <div class="card-note">加拿大银行/金融业多用 Azure</div>
      </a>
    </div>
  </div>

  <div class="phase-connector">
    <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="#A78BFA" stroke-width="2" stroke-dasharray="4 3"/></svg>
  </div>

  <!-- PHASE 10: MLOps -->
  <div class="phase phase-10" id="phase-10">
    <div class="phase-header">
      <span class="phase-num">10</span>
      <span class="phase-title"><span class="phase-icon">🚀</span> MLOps</span>
      <span class="phase-badge badge-infra">Platform Engineering</span>
      <div class="phase-divider"></div>
      <span class="phase-desc">Java 后端经验直接迁移</span>
    </div>
    <div class="card-grid">
      <a class="card" href="./topics/kubernetes.html">
        <div class="card-title"><span class="icon">☸️</span> Kubernetes</div>
        <div class="tag-list">
          <span class="tag tag-core">Pods / Deployments</span>
          <span class="tag tag-core">Services / Ingress</span>
          <span class="tag tag-key">Helm Charts</span>
          <span class="tag tag-key">GPU Scheduling</span>
          <span class="tag tag-nice">Kueue</span>
        </div>
        <div class="card-note">Docker 经验是很好基础，顺势学 K8s</div>
      </a>
      <a class="card" href="./topics/mlflow.html">
        <div class="card-title"><span class="icon">📊</span> MLflow</div>
        <div class="tag-list">
          <span class="tag tag-core">Experiment Tracking</span>
          <span class="tag tag-core">Model Registry</span>
          <span class="tag tag-key">Model Serving</span>
          <span class="tag tag-key">Projects</span>
        </div>
      </a>
      <a class="card" href="./topics/cicd.html">
        <div class="card-title"><span class="icon">🔁</span> CI/CD for ML</div>
        <div class="tag-list">
          <span class="tag tag-core">GitHub Actions</span>
          <span class="tag tag-key">Data Version Control</span>
          <span class="tag tag-key">DVC</span>
          <span class="tag tag-nice">Argo Workflows</span>
        </div>
        <div class="card-note">Java CI 经验可直接迁移</div>
      </a>
      <a class="card" href="./topics/monitoring.html">
        <div class="card-title"><span class="icon">👁️</span> Monitoring</div>
        <div class="tag-list">
          <span class="tag tag-core">Data Drift</span>
          <span class="tag tag-core">Model Degradation</span>
          <span class="tag tag-key">Evidently AI</span>
          <span class="tag tag-key">Prometheus</span>
          <span class="tag tag-nice">Grafana</span>
        </div>
        <div class="card-note">AI 系统生产化关键</div>
      </a>
    </div>
  </div>

</div>

<!-- CAREER TARGETS -->
<section class="targets" id="targets">
  <div class="targets-title">// Career Targets</div>
  <div class="target-grid">
    <div class="target-card target-card-data">
      <div class="target-role target-role-data">Senior Data Engineer</div>
      <div class="target-skills">
        Spark · Kafka · BigQuery · Airflow · dbt · Iceberg · Delta Lake · SQL · Data Modeling
      </div>
      <div class="target-timeline">⏱ Current → 6 months · AWS Data Engineer Cert</div>
    </div>
    <div class="target-card target-card-ai">
      <div class="target-role target-role-ai">AI / LLM Engineer</div>
      <div class="target-skills">
        RAG · LangChain · LangGraph · MCP · Vector DB · Fine-tuning · Prompt Engineering
      </div>
      <div class="target-timeline">⏱ 6 → 12 months · Portfolio Projects</div>
    </div>
    <div class="target-card target-card-arch">
      <div class="target-role target-role-arch">AI Architect / Platform</div>
      <div class="target-skills">
        MLOps · Kubernetes · Multi-Agent · GraphRAG · Vertex AI · Evaluation Frameworks
      </div>
      <div class="target-timeline">⏱ 12 → 24 months · Leadership Track</div>
    </div>
  </div>
</section>

<!-- CERTIFICATIONS -->
<section class="certs" id="certs">
  <div class="targets-title">// Certification Roadmap</div>
  <div class="certs-row">
    <div class="cert-pill">
      <span class="cert-icon">🟠</span>
      AWS Solutions Architect Associate
      <span style="font-size:10px;color:var(--landing-text-muted);margin-left:4px">— First</span>
    </div>
    <div class="cert-pill">
      <span class="cert-icon">🟠</span>
      AWS Data Engineer Associate
      <span style="font-size:10px;color:var(--landing-text-muted);margin-left:4px">— Second</span>
    </div>
    <div class="cert-pill">
      <span class="cert-icon">🔴</span>
      Databricks Data Engineer Professional
    </div>
    <div class="cert-pill">
      <span class="cert-icon">🔵</span>
      GCP Professional Data Engineer
    </div>
    <div class="cert-pill">
      <span class="cert-icon">🔷</span>
      Azure Data Engineer Associate DP-203
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="landing-footer">
  <div class="footer-text">
    Senior Data / AI Engineering Roadmap 2025–2026
  </div>
  <div class="footer-text">
    Built by <a href="https://huzhi.dev">huzhi.dev</a>
  </div>
</footer>

<!-- BACK TO TOP -->
<div class="back-top" id="backTop">↑</div>

</div>
