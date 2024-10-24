#![allow(clippy::missing_errors_doc)]
#![allow(clippy::unnecessary_struct_initialization)]
#![allow(clippy::unused_async)]
use loco_rs::prelude::*;
use axum::debug_handler;
use serde::{Deserialize, Serialize};

use crate::models::_entities::leads::{ActiveModel, Entity, Model};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Params {
    pub name: String,
    pub email: String,
    pub company: String,
}

impl Params {
    fn update(&self, item: &mut ActiveModel) {
        item.name = Set(self.name.clone());
        item.email = Set(self.email.clone());
        item.company = Set(self.company.clone());
    }
}

#[debug_handler]
pub async fn index(State(_ctx): State<AppContext>) -> Result<Response> {
    format::text("test")
}

pub async fn add(State(ctx): State<AppContext>, Json(params): Json<Params>) -> Result<Response> {
    let mut item = ActiveModel {
        ..Default::default()
    };
    params.update(&mut item);
    let item = item.insert(&ctx.db).await?;
    format::json(item)
}


pub fn routes() -> Routes {
    Routes::new()
        .prefix("api/leads/")
        .add("/", get(index))
        .add("/", post(add))
}
