use sea_orm::entity::prelude::*;
use super::_entities::leads::{ActiveModel, Entity};
pub type Leads = Entity;

impl ActiveModelBehavior for ActiveModel {
    // extend activemodel below (keep comment for generators)
}
