using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Entities
{
    public class Drink
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public decimal PriceLiter { get; set; }
        public decimal ActualVolume { get; set; }
        public int DrinkCategoryId { get; set; }
        public DrinkCategory DrinkCategory { get; set; }
        public List<PositionIngredients> PositionIngredients { get; set; }
    }
}
