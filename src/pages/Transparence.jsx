import React, { useState } from 'react';
import '../assets/css/Transparence.css';

const Transparence = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Octobre 2024');
  const [selectedCategory, setSelectedCategory] = useState('Toutes catégories');

  return (
    <div className="transparence-page">
      <div className="transparence-hero">
        <div className="transparence-hero-container">
          <h1>Transparence Financière</h1>
          <p>Consultez en toute transparence les budgets, dépenses et comptes de la commune de Gémenos</p>
        </div>
      </div>

      <div className="transparence-container">
        <div className="budget-section">
          <div className="budget-header">
            <h2>Budget Municipal 2024</h2>
            <div className="budget-actions">
              <button className="budget-btn primary">
                📥 Télécharger PDF
              </button>
              <button className="budget-btn secondary">
                📊 Export Excel
              </button>
            </div>
          </div>

          <div className="budget-cards">
            <div className="budget-card budget-total">
              <div className="budget-card-icon">€</div>
              <h3>Budget Total</h3>
              <div className="amount">2 450 000 €</div>
              <div className="change positive">
                ↗ +12% vs 2023
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="budget-card depenses">
              <div className="budget-card-icon">📊</div>
              <h3>Dépenses</h3>
              <div className="amount">1 890 000 €</div>
              <div className="change negative">
                77% du budget
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="budget-card recettes">
              <div className="budget-card-icon">💰</div>
              <h3>Recettes</h3>
              <div className="amount">2 120 000 €</div>
              <div className="change positive">
                87% prévu
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="budget-card solde">
              <div className="budget-card-icon">💡</div>
              <h3>Solde</h3>
              <div className="amount">+ 230 000 €</div>
              <div className="change positive">
                ↗ Réserve utile
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="repartition-section">
          <h2>Répartition des dépenses par secteur</h2>
          <div className="repartition-content">
            <div className="chart-placeholder"></div>
            
            <div className="repartition-list">
              <div className="repartition-item">
                <div className="repartition-info">
                  <div className="repartition-dot"></div>
                  <div className="repartition-details">
                    <h4>Personnel et charges sociales</h4>
                    <span>47% du budget total</span>
                  </div>
                </div>
                <div className="repartition-amount">890 000 €</div>
              </div>

              <div className="repartition-item">
                <div className="repartition-info">
                  <div className="repartition-dot"></div>
                  <div className="repartition-details">
                    <h4>Travaux et équipements</h4>
                    <span>22% du budget total</span>
                  </div>
                </div>
                <div className="repartition-amount">420 000 €</div>
              </div>

              <div className="repartition-item">
                <div className="repartition-info">
                  <div className="repartition-dot"></div>
                  <div className="repartition-details">
                    <h4>Services et fournitures</h4>
                    <span>15% du budget total</span>
                  </div>
                </div>
                <div className="repartition-amount">280 000 €</div>
              </div>

              <div className="repartition-item">
                <div className="repartition-info">
                  <div className="repartition-dot"></div>
                  <div className="repartition-details">
                    <h4>Subventions et aides</h4>
                    <span>9% du budget total</span>
                  </div>
                </div>
                <div className="repartition-amount">180 000 €</div>
              </div>

              <div className="repartition-item">
                <div className="repartition-info">
                  <div className="repartition-dot"></div>
                  <div className="repartition-details">
                    <h4>Charges financières</h4>
                    <span>7% du budget total</span>
                  </div>
                </div>
                <div className="repartition-amount">120 000 €</div>
              </div>
            </div>
          </div>
        </div>

        <div className="depenses-recentes">
          <div className="depenses-header">
            <h2>Dépenses récentes</h2>
            <div className="depenses-filters">
              <select 
                value={selectedPeriod} 
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="filter-select"
              >
                <option>Octobre 2024</option>
                <option>Septembre 2024</option>
                <option>Août 2024</option>
              </select>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option>Toutes catégories</option>
                <option>Équipements</option>
                <option>Services</option>
                <option>Personnel</option>
              </select>
            </div>
          </div>

          <table className="depenses-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Catégorie</th>
                <th>Fournisseur</th>
                <th>Montant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Date">15/10/2024</td>
                <td data-label="Description">Réparation éclairage public - Rue des Oliviers</td>
                <td data-label="Catégorie"><span className="category-tag equipement">Équipement</span></td>
                <td data-label="Fournisseur">ETS Lumière SARL</td>
                <td data-label="Montant">2 450 €</td>
              </tr>
              <tr>
                <td data-label="Date">12/10/2024</td>
                <td data-label="Description">Fournitures bureau - Mairie</td>
                <td data-label="Catégorie"><span className="category-tag service">Service</span></td>
                <td data-label="Fournisseur">Bureau Plus</td>
                <td data-label="Montant">340 €</td>
              </tr>
              <tr>
                <td data-label="Date">08/10/2024</td>
                <td data-label="Description">Entretien espaces verts - Parc municipal</td>
                <td data-label="Catégorie"><span className="category-tag service">Service</span></td>
                <td data-label="Fournisseur">Jardins du Sud</td>
                <td data-label="Montant">1 200 €</td>
              </tr>
              <tr>
                <td data-label="Date">05/10/2024</td>
                <td data-label="Description">Matériel informatique - Services techniques</td>
                <td data-label="Catégorie"><span className="category-tag equipement">Équipement</span></td>
                <td data-label="Fournisseur">Tech Solutions</td>
                <td data-label="Montant">890 €</td>
              </tr>
              <tr>
                <td data-label="Date">02/10/2024</td>
                <td data-label="Description">Réparation véhicule service - Camion</td>
                <td data-label="Catégorie"><span className="category-tag equipement">Équipement</span></td>
                <td data-label="Fournisseur">Garage Municipal</td>
                <td data-label="Montant">675 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transparence;
